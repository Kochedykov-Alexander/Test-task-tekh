import React, {useState} from 'react'
import User from '../../User'
import '../../../scss/tabs.css'


export default function TabContent({users}) {

	const [modalActive, setModalActive] = useState(false);
	const [requiredItem, setReruiredItem] = useState();
	
	const getSelected = (item) => {
		setReruiredItem(item)
		setModalActive(true)
	}

	return (
		
		<div className="tab-content">
	  		<ul className="user__list">{users.map(item => <User setReruiredItem = {setReruiredItem} requiredItem = {requiredItem} getSelected = {getSelected} user = {item} modalActive = {modalActive} setModalActive = {setModalActive}/>)}</ul>
			
	  	</div>
		
	)
}
