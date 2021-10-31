import React from 'react'
import avatar from '../resources/img/avatar.png'
import '../scss/user.css'
import Modal from './UI/Modal/Modal';
import moment from 'moment'
import 'moment/locale/ru';



export default function User({user, modalActive, setModalActive}) {

	let statusMap = new Map([
		[0, "Подписка активна"],
		[1, "Приостановлена"],
		[2, "Заблокирован"]
	]);

	moment.locale('ru');
	
	
	
	
	
	
	return (
				<div className="user__column">
						<li className="user__item item row d-md-flex flex-direction-md-column .align-items-md-center" key={user.id} onClick={() => setModalActive(true)}>
							<div className="item__image col-12 col-md-1">
								<img src={avatar} alt="" />
							</div>
							<div className="item__name col-12 col-md-2 my-1">{user.fname} {user.name.charAt(0)}. {user.mname.charAt(0)}.</div>
							<div className="item__balance col-12 col-md-2 my-1">Баланс: {Math.round(user.balance * Math.pow(10, 2)) / Math.pow(10, 2)}</div>
							<div className="item__last-updated col-12 col-md-5 my-1">Последнее изменение: {moment(user.lastUpdatedAt).fromNow()}</div>
							<div class="item__dropdown-2 col-12 col-md-2 my-1" onClick = {e => e.stopPropagation()}>
								<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									{statusMap.get(user.status)}
								</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								{statusMap.forEach((value, key) => {<li><a class={statusMap.get(key) === statusMap.get(user.status) ? "dropdown-item" : "dropdown-item disabled"} href="#">{statusMap.get(key)}</a></li>})}
							
							</ul>
							</div>
							
						</li>
						<Modal user = {user} modalActive = {modalActive} setModalActive = {setModalActive}/>
					</div>
				
				
			
	)
}
