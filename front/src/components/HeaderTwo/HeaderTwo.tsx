'use client'

import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import Logo from "@/components/icons/Logo";
import NavigationTwo from "@/components/HeaderTwo/navigation/NavigationTwo";
import BasketIcon from "@/components/HeaderTwo/icons/basketIcon";

import styles from './HeaderTWO.module.scss'



export const navItems = [
	{ label: 'Скидки', href: '/' },
	{ label: 'Новинки', href: '/newProduct' },
	{ label: 'Отзывы', href: '/' },
]

const HeaderTwo = () => {
	const session = useSession()

	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.menu}>
				<Link href={'/'} className={styles.logo}><Logo /></Link>
				<nav className={styles.navText}>
					<NavigationTwo navLinks={navItems} />
				</nav>
			</div>
			<div className={styles.linck}>
				{
					session?.data ?
						<Link className={styles.textLink} href='#'
									onClick={() => signOut({ callbackUrl: '/' })}>Выйти <BasketIcon/></Link>
						:
						<>
							<Link className={styles.textLink} href='/signin'>Войти <BasketIcon/></Link>
						</>
				}
			</div>
		</header>
	)
}

export { HeaderTwo }
