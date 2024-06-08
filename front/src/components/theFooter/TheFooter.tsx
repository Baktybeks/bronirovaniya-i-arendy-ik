import styles from './TheFooter.module.scss'
import Facebook from '@/components/theFooter/icons/facebook'
import Insta from '@/components/theFooter/icons/insta'
import Youtybe from '@/components/theFooter/icons/youtybe'
import LogoFooter from "@/components/theFooter/icons/logoFooter";

const TheFooter = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.contentYslug}>
				<div className={styles.yslygi}>
					<div className={styles.infoFooter}>
						<div><LogoFooter/></div>
						<p>4517 Washington Ave. <br/> Manchester, Kentucky 39495</p>
						<ul className={styles.links}>
							<li><Facebook/></li>
							<li><Insta/></li>
							<li><Youtybe/></li>
						</ul>
					</div>
					<ul className={styles.tel}>
						<li className={styles.textTel}>Телефон</li>
						<li>+996 555 555 555</li>
						<li>+996 555 555 555</li>
						<li>+996 555 555 555</li>
					</ul>
				</div>
			</div>

		</footer>
	)
}

export { TheFooter }
