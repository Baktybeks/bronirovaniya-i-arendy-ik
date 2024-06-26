'use client'

import React, {useEffect, useRef, useState} from 'react'
import Slider from 'react-slick'
import ArrowRight from '@/components/theCriteria/icons/ArrowRight'
import Nums from "@/components/theCriteria/icons/nums";
import Link from "next/link";

import 'slick-carousel/slick/slick.css'
import './TheSlider.scss'
import styles from './TheReceipts.module.scss'

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
                            {data.map((elem: any) => (
                                <Link href={{
                                    pathname: '/locations',
                                    query: { id: elem.id.toString() }
                                }}  key={elem.id}>
                                    <img src={`http://localhost:5000/${elem.image}`} alt='tower'
                                         className={styles.imgesLocation}/>
                                    <div className={styles.textLocation}>
                                        <div className={styles.nameLocation}>{elem.address}</div>
                                        <div><Nums/></div>
                                        <div className={styles.infoLocation}>
                                            <div className={styles.infoDay}>
                                                <div className={styles.prise}>{elem.price} сом</div>
                                                <div className={styles.day}>{elem.day} дней</div>
                                            </div>
                                        </div>
                                        <p className={styles.renovationBook}>{elem.description}</p>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TheReceipts