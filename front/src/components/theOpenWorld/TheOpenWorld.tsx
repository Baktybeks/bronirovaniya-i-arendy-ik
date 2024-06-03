import React from 'react'
import Image from 'next/image'
import Imagesti from './icons/Images.png';
import styles from './TheOpenWorld.module.scss'

const TheOpenWorld = () => {
	return (
		<>
			<div className={styles.openWorld}>
				<div className={styles.info}>
					<h1 className={styles.nameHeader}>Осмелитесь прожить жизнь, о которой вы всегда мечтали.</h1>
					<p className={styles.text}>Жизнь коротка, а мир огромен. Так что лучше начать.</p>
				</div>
				<div className={styles.image}>
					<Image src={Imagesti} alt='image' />
				</div>
			</div>
		</>
	)
}

export default TheOpenWorld