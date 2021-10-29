import React, {useState, useEffect} from 'react'
import UserService from '../API/UserService'
import Loader from '../components/UI/Loader/Loader';
import User from '../components/User'
import { useFetching } from '../hooks/useFetching';
import '../scss/user_list.css'

export default function UserList() {

	const [users, setUsers] = useState([]);

	const [fetchUsers, loading, errors] = useFetching(async () => {

		const usersApi = await UserService.getAll()
		console.log(usersApi)
		setUsers(usersApi)
	  })

	useEffect(() => {
		fetchUsers()
	}, [])

	useEffect(() => {
		
	}, [users])

	console.log(users)

	


	return (

		<div className="row">
			<div className="user col-12">
			{errors && (
          		<h1>Ошибка! ${errors}</h1> )
        	}
			{loading ? 
      		 <Loader/>:
			   
			   users.map(item => <ul className="user__list"><User user = {item}/></ul>)
				
			}
			
			</div>
		</div>
	)
}
