import React from 'react'
import '../../..//scss/modal.css'

export default function Modal({modalActive, setModalActive, user}) {
	return (
		<div className={modalActive ? "modal active px-3" : "modal px-3"} onClick = {() => setModalActive(false)} > 
			<div className={modalActive ? "modal__content active content" : "modal__content content"} onClick = {e => e.stopPropagation()}>
				<div className="content__title">
					Иванов Иван
				</div>
				<div className="content__line">

				</div>
				<div className="content__row row">
					<div className="row__item item row">
						<div className="item__surname col-12 col-md-4">
							Иванов
						</div>
						<div className="item__name col-12 col-md-4">
							Иван
						</div>
						<div className="item__patronymic col-12 col-md-4">
							Петрович
						</div>
						<div class="item__dropdown col-12 col-md-4 my-3">
								<button class="btn dropdown-toggle" style={{width: '100%'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									Приостановлена
								</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><a class="dropdown-item" href="#">Приостановлена</a></li>
								<li><a class="dropdown-item" href="#">Подписка активна</a></li>
								<li><a class="dropdown-item" href="#">Заблокирован</a></li>
							</ul>
							</div>
					</div>
				</div>
			</div>
		</div>
	)
}
