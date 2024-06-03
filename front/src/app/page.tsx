'use client'

import React, {useState} from 'react'
import TheOpenWorld from '@/components/theOpenWorld/TheOpenWorld'
import TheCriteria from '@/components/theCriteria/TheCriteria'
import TheReceipts from '@/components/theReceipts/TheReceipts'
import TheBooksSold from '@/components/theBooksSold/TheBooksSold'
import TheAddAplication from "@/components/theAddAplication/TheAddAplication";


import styles from './styles/Home/Home.module.scss'
import classNames from "classnames";


const Home = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<div className={classNames(styles.shadow, {[styles.shadowNot]: !active})} onClick={() => setActive(!active)}></div>
			<div className={classNames(styles.application, {[styles.applicationNot]: !active})}>
				<TheAddAplication onActive={setActive} active={active}/>
			</div>
			<section className={styles.wrapperOpenWorld}>
				<TheOpenWorld />
			</section>
			<section className={styles.wrapperCriteria}>
				<TheCriteria />
			</section>
			<section className={styles.wrapperReceipts}>
				<TheReceipts />
			</section>
			<section className={styles.wrapperBooksSold}>
				<TheBooksSold />
			</section>
		</>
	)
}

export default Home