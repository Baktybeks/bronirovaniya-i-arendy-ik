import React from 'react'
import Image from 'next/image'
import Imagesti from './icons/Images.png';
import styles from './TheOpenWorld.module.scss'

interface Props {
	onActive: (value: boolean) => void;
	active: boolean;
}

const TheOpenWorld = ({onActive, active}: Props) => {
	return (
		<>
			<div className={styles.openWorld}>
				<div className={styles.info}>
					<h1 className={styles.nameHeader}>Dare to live the life you've always wanted.</h1>
					<p>Life is short and the world is wide. So, better get started.</p>
				</div>
				<div className={styles.image}>
					<Image src={Imagesti} alt='image' />
				</div>
			</div>
		</>
	)
}

export default TheOpenWorld