import React from 'react'
import '../../../scss/loader.css'

export default function Loader() {
	return (
		<div class="preloader">
			<div class="preloader__row">
				<div class="preloader__item"></div>
				<div class="preloader__item"></div>
				<div class="preloader__item"></div>
			</div>
		</div>
	)
}
