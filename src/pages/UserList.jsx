import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../API/UserService'
import Loader from '../components/UI/Loader/Loader';
import Tabs from '../components/UI/Tab/Tabs';
import { useFetching } from '../hooks/useFetching';
import { setUsers } from '../store/reducers/usersReducer';

export default function UserList() {

	
	const users = useSelector(state => state.users.users)
	const dispatch = useDispatch();
	

	const items = [
		{ title: 'Все', users: users},
		{ title: 'Заблокированные', users: users.filter(user => user.status === 2) },
		{ title: 'Активные', users: users.filter(user => user.status === 0) },
	];

	const [fetchUsers, loading, errors] = useFetching(async () => {
		let usersApi = await UserService.getAll()
		dispatch(setUsers(usersApi));
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
