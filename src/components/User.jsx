import React from 'react'
import avatar from '../resources/img/avatar.png'
import '../scss/user.css'


export default function User({user}) {

	let statusMap = new Map([
		[0, "Подписка активна"],
		[1, "Приостановлена"],
		[2, "Заблокирован"]
	]);
	
	return (
			
						<li className="user__item item" key={user.id}>
							<div className="item__image">
								<img src="http://archilab.online/images/1/123.jpg" alt="" />
							</div>
							<div className="item__name">{user.name}</div>
							<div className="item__balance">Баланс: {Math.round(user.balance * Math.pow(10, 2)) / Math.pow(10, 2)}</div>
							<div className="item__last-updated">Последнее изменение: 10 секунд назад</div>
							<div class="item__dropdown">
								<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									{statusMap.get(user.status)}
								</button>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><a class="dropdown-item" href="#">Приостановлена</a></li>
								<li><a class="dropdown-item" href="#">Подписка активна</a></li>
								<li><a class="dropdown-item" href="#">Заблокирован</a></li>
							</ul>
							</div>
						</li>
				
				
			
	)
}
