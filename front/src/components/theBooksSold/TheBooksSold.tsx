'use client'

import React, {useRef,} from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import './TheSlider.scss'
import styles from './TheBooksSold.module.scss'
import {dataComments} from "./dataComments/dataComments";
import Star from "./icons/star";
import ArrowRight from "@/components/theCriteria/icons/ArrowRight";

const TheBooksSold = () => {
    let sliderRef = useRef<Slider | null>(null)

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
                            {dataComments.map((elem: any) => (
                                <div key={elem.id} className={styles.blockComment}>
                                    <div className={styles.userComments}>
                                        <div className={styles.userBlock}>
                                            <div className={styles.infoUser}>
                                            <div className={styles.userImg}>{elem.avatar}</div>
                                                <h2 className={styles.name}>{elem.name}</h2>
                                                <p className={styles.works}>{elem.works}</p>
                                                <div><Star/></div>
                                                <p className={styles.textDesc}>{elem.desc}</p>
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
