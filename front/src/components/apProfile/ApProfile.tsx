'use client'

import React, {useEffect, useState} from 'react';
import styles from './ApProfile.module.scss'
import {useSession} from "next-auth/react";


const ApProfile = () => {
    const [applications, setApplications] = useState<any>([]);
    const session = useSession();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:5000/api/application/');
            if (!res.ok) {
                throw new Error('Unable to fetch posts!');
            }
            const applicationsData = await res.json();
            setApplications(applicationsData);
        };

        fetchData();
    }, []);

    const handleDelete = async (index: string) => {
        try {
            const response = await fetch(`http://localhost:5000/api/application/${index}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setApplications((elem: any) => elem.filter((app: any) => app.id !== index));
                console.log('Объект удален')
            } else {
                console.error('Ошибка при удалении направления:', response.statusText);
            }
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };

    return (
        <div className={styles.blockApplication}>
            {session?.data &&
                <div className={styles.hello}>Здравствуйте {session.data?.user?.name} - {
                    applications
                        .filter((elem: any) => session.data?.user?.name === elem.name)
                        .map((elem: any, index: number) => {
                            return (
                                <div key={elem.id} className={styles.list}>
                                    {session.data?.user?.name === elem.name && elem.processed === true ? <div>Ваша заявка
                                        принята</div> : <div>Ваша заявка в обработке </div>}
                                    <div key={elem.id} className={styles.infoList}>
                                        <div className={styles.blockInfo}>
                                            <img src={`http://localhost:5000/${elem.RentalItem.image}`} alt='tower'
                                                 className={styles.imge}/>
                                            <p className={styles.name}>Тел: {elem.phone}</p>
                                            <p className={styles.address}>Название: {elem.RentalItem.title}</p>
                                            <p className={styles.address}>Адрес: {elem.RentalItem.Rent.address}</p>
                                            <p className={styles.prise}>Цена: {elem.RentalItem.price} сом</p>
                                            <h2 className={styles.name}>Оплата: {elem.paymentMethod}</h2>
                                            <p className={styles.prise}>Дни: {elem.RentalItem.day} дней</p>
                                            <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                }</div>
            }
        </div>
    );
};

export default ApProfile;