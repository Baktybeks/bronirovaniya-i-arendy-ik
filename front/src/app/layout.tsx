import React from 'react'
import { Metadata } from 'next'
import { TheHeader } from '@/components/theHeader/TheHeader'
import { TheFooter } from '@/components/theFooter/TheFooter'
import { Providers } from '@/components/providers/Providers'

import styles from './styles/Layout.module.scss'
import './globals.css'

export const metadata: Metadata = {
	title: 'Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({
																		 children
																	 }: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
		<Providers>
		<body>
			{children}
		</body>
		</Providers>
		</html>
	)
}
