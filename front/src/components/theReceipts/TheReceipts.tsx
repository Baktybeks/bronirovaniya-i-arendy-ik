'use client'

import React, {useEffect, useRef, useState} from 'react'
import Slider from 'react-slick'
import ArrowRight from '@/components/theCriteria/icons/ArrowRight'

import 'slick-carousel/slick/slick.css'
import './TheSlider.scss'
import styles from './TheReceipts.module.scss'
import Nums from "@/components/theCriteria/icons/nums";

const TheReceipts = () => {
    const [data, setData] = useState([])

    let sliderRef = useRef<Slider | null>(null)

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
    }, [])

    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext()
        }
    }

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev()
        }
    }

    return (
        <>
            <div className={styles.blockSlider}>
                <div className={styles.blockHeader}>
                    <h2 className={styles.nameSliders}>Удивительные места <br/> по всему <span
                        className={styles.write}>Иссык-Кулю</span></h2>
                    <div className={styles.blockButtons}>
                        <button className={styles.buttonPrev} onClick={previous}>
                            <ArrowRight/>
                        </button>
                        <button className={styles.buttonNext} onClick={next}>
                            <ArrowRight/>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='sliderReceipts'>
                        <Slider
                            ref={(slider: any) => {
                                sliderRef.current = slider
                            }}
                            {...settings}>
                            {data.map((elem: any, index) => (
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
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheReceipts