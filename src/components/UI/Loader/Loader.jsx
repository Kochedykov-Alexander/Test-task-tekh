import React from 'react'
import styles from '../../../scss/loader.module.scss'

export default function Loader() {
	return (
		<div className={styles.preloader}>
			<div className={styles.preloader__row}>
				<div className={styles.preloader__item}></div>
				<div className={styles.preloader__item}></div>
				<div className={styles.preloader__item}></div>
			</div>
		</div>
	)
}
