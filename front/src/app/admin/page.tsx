'use client'

import React, {useEffect, useState} from 'react';
import styles from '../styles/admin/Admin.module.scss'
import Layout from "@/components/layout/Layout";

interface Direction {
    id: string;
    address: string;
    price: string;
    image: string;
}


const PageAdmin = () => {
    const [books, setBooks] = useState<Direction[]>([]);
    const [gender, setGender] = useState<any>([]);
    const [newBooks, setNewBooks] = useState<Direction>({
        id: '',
        address: '',
        price: '',
        image: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/rent');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setBooks(jsonData);
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/rent');
            if (!response.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const jsonData = await response.json();
            setGender(jsonData);
        };

        fetchData();
    }, []);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        if (name === 'cover_image') {
            setNewBooks(prevState => ({
                ...prevState,
                [name]: e.target.files[0]
            }));
        } else {
            setNewBooks(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleDelete = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/rent/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setBooks((book: any) => book.filter((app: any) => app.id !== index));
                console.log('Объект удален')
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('id', newBooks.id);
            formData.append('address', newBooks.address);
            formData.append('price', newBooks.price);
            formData.append('cover_image', newBooks.image);

            const response = await fetch('http://localhost:5000/api/rent/', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const res = await fetch('http://localhost:5000/api/rent');
                if (!res.ok) {
                    throw new Error('Unable to fetch directions!');
                }
                const jsonData = await res.json();
                setBooks(jsonData.rows);

                console.log('добавлен объект');
            } else {
                console.error('Ошибка при добавлении нового направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <Layout Header='home' isFooterHidden>
            <div className={styles.wrapperAdmin}>
                <div className={styles.addBooks}>
                    <div>
                        <h2 className={styles.nameAdmin}>Добавить новую тур</h2>
                        <form className={styles.formAdmin} onSubmit={handleSubmit}>
                            <div className={styles.inputForm}>
                                <label>Название:</label>
                                <input className={styles.input} placeholder='Название' type="text" name="address"
                                       value={newBooks.address} onChange={handleChange}/>
                            </div>
                            <div className={styles.inputForm}>
                                <label>Цена:</label>
                                <input className={styles.input} placeholder='Цена' type="number" name="price"
                                       value={newBooks.price} onChange={handleChange}/>
                            </div>
                            <div className={styles.inputForm}>
                                <label>Картинка:</label>
                                <div className={styles.blockImages}>
                                    <input className={styles.imagesInput} type="file" name="cover_image"
                                           accept='/image/*, .png, .jpg, .web'
                                           onChange={handleChange}/>
                                </div>
                            </div>

                            <button className={styles.summit} type="submit">Отправить</button>
                        </form>
                    </div>
                </div>

                <h2 className={styles.nameBooksList}>Добавленные Туры</h2>
                <ul className={styles.blockList}>
                    {books.map((elem) => (
                        <li key={elem.id} className={styles.infoList}>
                            <div>
                                <img src={`http://localhost:5000/${elem.image}`} alt='tower'
                                     className={styles.imgesBooks}/>
                                <div className={styles.textBooks}>
                                    <div className={styles.renovationBook}>{elem.address}</div>
                                    <div className={styles.prise}>{elem.price} сом</div>
                                </div>
                            </div>
                            <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default PageAdmin;
