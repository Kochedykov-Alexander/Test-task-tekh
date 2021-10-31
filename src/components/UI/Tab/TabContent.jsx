import React, {useState} from 'react'
import User from '../../User'
import '../../../scss/tabs.css'
import Modal from '../Modal/Modal';

export default function TabContent({users}) {

	const [modalActive, setModalActive] = useState(false);
	const [requiredItem, setReruiredItem] = useState();
	
	const getSelected = (item) => {
		setReruiredItem(item)
		setModalActive(true)
	}

	return (
		
		<div className="tab-content">
	  		{users.map(item => <ul className="user__list"><User getSelected = {getSelected} user = {item} modalActive = {modalActive} setModalActive = {setModalActive}/></ul>)}
			  {requiredItem &&
				<Modal requiredItem = {requiredItem} modalActive = {modalActive} setModalActive = {setModalActive}/>
			  }
	  	</div>
		
	)
}
