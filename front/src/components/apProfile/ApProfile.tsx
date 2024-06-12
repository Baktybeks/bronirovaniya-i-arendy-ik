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
                                <ul key={elem.id} className={styles.list}>
                                    {session.data?.user?.name === elem.name && elem.processed === true ? <li>Ваша заявка
                                        принята</li> : <li>Ваша заявка в обработке </li>}
                                    <div className={styles.userBlock}>
                                        <div className={styles.userImg}>
                                            <img src={`http://localhost:5000/${elem.Rent.image}`} alt='img'
                                                 className={styles.userImg}/>
                                        </div>
                                        <div className={styles.textNewItems}>
                                            <div className={styles.name}>{elem.Rent.title}</div>
                                            <div className={styles.som}>
                                                <div>{elem.Service.basic_package} сом</div>
                                            </div>
                                        </div>
                                        <button className={styles.delete} onClick={() => handleDelete(elem.id)}>Удалить</button>
                                    </div>
                                </ul>
                            );
                        })
                }</div>
            }
        </div>
    );
};

export default ApProfile;