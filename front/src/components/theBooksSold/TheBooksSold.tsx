'use client'

import React, {useEffect, useRef, useState,} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import './TheSlider.scss'
import styles from './TheBooksSold.module.scss'
import Star from "./icons/star";

const TheBooksSold = () => {
    const [data, setData] = useState([])

    let sliderRef = useRef<Slider | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/review/')
            if (!response.ok) {
                throw new Error('Unable to fetch posts!')
            }
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData()
    }, []);

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <>
            <div className={styles.blockSlider}>
                <div>
                    <div className={styles.blockHeader}>
                        <h2 className={styles.nameSliders}>Довольные <br/><span
                            className={styles.write}>путешественники</span></h2>
                    </div>
                    <div className='sliderReceipts'>
                        <Slider
                            ref={(slider: any) => {
                                sliderRef.current = slider
                            }}
                            {...settings}>
                            {data.map((elem: any) => (
                                <div key={elem.id} className={styles.blockComment}>
                                    <div className={styles.userComments}>
                                        <div className={styles.userBlock}>
                                            <div className={styles.infoUser}>
                                            <div className={styles.userImg}>
                                                <img src={`http://localhost:5000/${elem.avatar}`} alt='tower'
                                                     className={styles.userImg}/>
                                                </div>
                                                <h2 className={styles.name}>{elem.name}</h2>
                                                <p className={styles.works}>{elem.works}</p>
                                                <div><Star/></div>
                                                <p className={styles.textDesc}>{elem.review}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheBooksSold
