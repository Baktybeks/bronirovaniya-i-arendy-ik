'use client'

import React, {useEffect, useState} from 'react';
import Nums from "@/components/theCriteria/icons/nums";
import styles from "../styles/location/Location.module.scss";
import {useSearchParams} from "next/navigation";
import Layout from "@/components/layout/Layout";

const PageLocations = () => {
    const [data, setData] = useState([]);
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/rent')
            if (!response.ok) {
                throw new Error('Unable to fetch posts!')
            }
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData()
    }, []);

    return (
        <Layout Header='home'>
            <div className={styles.blockLocation}>
                <h2 className={styles.headerPage}>Бостери</h2>
                <div className={styles.blockLoc}>
                    {data.map((elem: any) => (
                        <div key={elem.id}>
                            <img src={`http://localhost:5000/${elem.image}`} alt='tower'
                                 className={styles.imgesLocation}/>
                            <div className={styles.textLocation}>
                                <div className={styles.nameLocation}>{elem.address}</div>
                                <div><Nums/></div>
                                <div className={styles.infoLocation}>
                                    <div className={styles.renovationBook}>{elem.price}</div>
                                    <div className={styles.prise}>{elem.price}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default PageLocations;