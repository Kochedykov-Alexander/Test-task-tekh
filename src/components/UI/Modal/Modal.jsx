import React from 'react'
import '../../..//scss/modal.css'

export default function Modal({modalActive, setModalActive, user}) {
	return (
		<div className={modalActive ? "modal active px-3" : "modal px-3"} onClick = {() => setModalActive(false)} > 
			<div className={modalActive ? "modal__content active content" : "modal__content content"} onClick = {e => e.stopPropagation()}>
				<div className="content__column column d-flex flex-column justify-content-between">
					<div className="column__top">
						<div className="content__header">
							<div className="content__title">
								Иванов Иван
							</div>
							<div className="content__close">
								<span class="close"></span>
							</div>
							
						</div>
				<div className="content__line">

				</div>
				
					<div className="content__item item row g-5">
						<div className="item__surname col-12 col-md-3 mx-1">
								Иванов
						</div>
						<div className="item__name col-12 col-md-3 mx-1">
						
								Иванов
							
						</div>
						<div className="item__patronymic col-12 col-md-3 mx-1">
							Петрович
						</div>
						<div class="item__dropdown dropdown col-12 col-md-3 mx-1">
								<button class="btn dropdown-toggle dropdown__btn d-flex justify-content-between align-items-center col-12" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Приостановлена
								</button>
							<ul class="dropdown-menu col-12 col-md-4" aria-labelledby="dropdownMenuButton1">
								<li><a class="dropdown-item" href="#">Приостановлена</a></li>
								<li><a class="dropdown-item" href="#">Подписка активна</a></li>
								<li><a class="dropdown-item" href="#">Заблокирован</a></li>
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
