import React from 'react'
import avatar from '../resources/img/avatar.png'
import moment from 'moment'
import 'moment/locale/ru';
import Modal from './UI/Modal/Modal';
import styles from '../scss/user.module.scss'


export const statusMap = new Map([
	[0, "Подписка активна"],
	[1, "Приостановлена"],
	[2, "Заблокирован"]
]);

export default function User({user, getSelected}) {

	

	moment.locale('ru');
	
	
	return (
		<div className={styles.user__column}>
			<li className ={styles.user__item + " " + styles.item + " row d-md-flex flex-direction-md-column align-items-md-center"} key={user.id} onClick={() => getSelected(user)}>
				<div className={styles.item__image + " col-12 col-md-1"}>
					<img className="w-100" src={avatar} alt="" />
				</div>
				<div className={styles.item__name + " col-12 col-md-2 my-1 text-center"}>{user.fname} {user.name.charAt(0)}. {user.mname.charAt(0)}.</div>
				<div className={styles.item__balance + " col-12 col-md-2 my-0 text-md-start text-center"}>Баланс: {Math.round(user.balance * Math.pow(10, 2)) / Math.pow(10, 2)}</div>
				<div className={styles.item__last_updated + " col-12 col-md-5 my-1 text-md-end text-center"}>Последнее изменение: {moment(user.lastUpdatedAt).fromNow()}</div>
				<div className={styles.item__dropdown_2 + " col-12 col-md-2 my-1 text-md-end text-center"} onClick = {e => e.stopPropagation()}>
					<button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						{statusMap.get(user.status)}
					</button>
					<ul className={styles.dropdown_menu + " dropdown-menu"} aria-labelledby="dropdownMenuButton1">
						<li><a className={0 === user.status ? "dropdown-item" : "dropdown-item disabled"} href="/#">{statusMap.get(0)}</a></li>
						<li><a className={1 === user.status ? "dropdown-item" : "dropdown-item disabled"} href="/#">{statusMap.get(1)}</a></li>
						<li><a className={2 === user.status ? "dropdown-item" : "dropdown-item disabled"} href="/#">{statusMap.get(2)}</a></li>
					</ul>
				</div>
				
			</li>

			
			
			

		</div>			
			
	)
}
