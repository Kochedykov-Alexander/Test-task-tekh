import React from 'react'
import '../../../scss/loader.css'

export default function Loader() {
	return (
		<div className="preloader">
			<div className="preloader__row">
				<div className="preloader__item"></div>
				<div className="preloader__item"></div>
				<div className="preloader__item"></div>
			</div>
		</div>
	)
}
