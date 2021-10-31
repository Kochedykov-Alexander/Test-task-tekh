import React, {useState, useEffect} from 'react'
import UserService from '../API/UserService'
import Loader from '../components/UI/Loader/Loader';
import Tabs from '../components/UI/Tab/Tabs';
import User from '../components/User'
import { useFetching } from '../hooks/useFetching';
import '../scss/user_list.css'

export default function UserList() {

	

	const [users, setUsers] = useState([]);
	

	const items = [
		{ title: 'Все', users: users},
		{ title: 'Заблокированные', users: users.filter(user => user.status === 2) },
		{ title: 'Активные', users: users.filter(user => user.status === 0) },
	];

	const [fetchUsers, loading, errors] = useFetching(async () => {

		const usersApi = await UserService.getAll()
		setUsers(usersApi)
	  })

	useEffect(() => {
		fetchUsers()	
	}, [])

	return (

		<div className="row">
			<div className="user col-12">
			{errors && (
          		<h1>Ошибка! ${errors}</h1> )
        	}
			
			{loading ? 
      		<Loader/>
				: 
			<Tabs items={items}/>
			 
				
			}
			
			</div>
		</div>
	)
}
