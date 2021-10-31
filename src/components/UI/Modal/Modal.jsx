import React from 'react'
import '../../../scss/modal.css'
import { statusMap } from '../../User'
import styles from '../../../scss/modal.module.scss'

export default function Modal({modalActive, setModalActive, requiredItem, setReruiredItem}) {

	
	return (
		<div className={modalActive ? "modal active" : "modal"}> 
			<div className={modalActive ? "modal__content active content" : "modal__content content"}>
				<div className="content__column h-100 column d-flex flex-column justify-content-between">
					<div className="column__top">
						<div className="content__header">
							<div className="content__title">
								{requiredItem.fname} {requiredItem.name}
							</div>
							<div className="content__close" onClick = {() => {
								setModalActive(false)
								setReruiredItem(null)
							}}>
								<span className="close"></span>
							</div>
							
						</div>
						<div className="content__line">
						</div>
				
						<div className="content__item item row gy-5">
							<div className="item__surname col-12 col-md-3 mx-md-3 mx-0">
								{requiredItem.fname}
							</div>
							<div className="item__name col-12 col-md-3 mx-md-3 mx-0">
								{requiredItem.name}
							</div>
							<div className="item__patronymic col-12 col-md-3 mx-md-3 mx-0">
								{requiredItem.mname}
							</div>
							<div className="item__dropdown dropdown col-12 col-md-3 mx-md-3 mx-0">
								<button className="btn dropdown-toggle dropdown__btn d-flex justify-content-between align-items-center col-12" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									{statusMap.get(requiredItem.status)}
								</button>
								<ul className="dropdown-menu col-12 col-md-4 mx-md-3 mx-0" aria-labelledby="dropdownMenuButton1">
									<li><a className={0 === requiredItem.status ? "dropdown-item" : "dropdown-item disabled"} href="/#">{statusMap.get(0)}</a></li>
									<li><a className={1 === requiredItem.status ? "dropdown-item" : "dropdown-item disabled"} href="/#">{statusMap.get(1)}</a></li>
									<li><a className={2 === requiredItem.status ? "dropdown-item" : "dropdown-item disabled"} href="/#">{statusMap.get(2)}</a></li>
								</ul>
							</div>
						</div>
					</div>

					<div className="column__bottom">
						<div className="row d-flex justify-content-end">
							<button className="content__button col-12 col-md-2">
								Сохранить
							</button>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}
