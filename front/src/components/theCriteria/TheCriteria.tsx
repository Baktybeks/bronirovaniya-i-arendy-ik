'use client'

import React from 'react'
import './TheCriteria.scss'
import Image from "next/image";
import Imagesti from "./icons/Images.png";
import styles from './TheCriteria.module.scss'


const TheCriteria = () => {
	return (
		<>
			<div className={styles.openWorld}>
				<div className={styles.image}>
					<Image src={Imagesti} alt='image' />
				</div>
				<div className={styles.info}>
					<h1 className={styles.nameHeader}>Наш план  — исполнить вашу <span className={styles.write}>мечту</span></h1>
					<p className={styles.text}>Нас выбирают уже более 15 лет!</p>
					<ul className={styles.list}>
						<li className={styles.blockList}>
							<span className={styles.num}>15</span>
							<span className={styles.strings}>На рынке</span>
						</li>
						<li className={styles.blockList}>
							<span className={styles.num}>1k</span>
							<span className={styles.strings}>домов</span>
						</li>
						<li className={styles.blockList}>
							<span className={styles.num}>20k</span>
							<span className={styles.strings}>Счасливых посетителей </span>
						</li>
						<li className={styles.blockList}>
							<span className={styles.num}>4.9</span>
							<span className={styles.strings}>Наш средний показатель</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default TheCriteria
