import React, {useState} from 'react'
import User from '../../User'
import '../../../scss/tabs.css'

export default function TabContent({users}) {

	const [modalActive, setModalActive] = useState(false);

	

	return (
		
		<div className="tab-content">
	  		{users.map(item => <ul className="user__list"><User user = {item} modalActive = {modalActive} setModalActive = {setModalActive}/></ul>)}
	  	</div>
		
	)
}
