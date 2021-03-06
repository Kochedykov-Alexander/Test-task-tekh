import React, {useState} from 'react'
import User from '../../User'
import styles from '../../../scss/tab.module.scss'
import stylesUser from '../../../scss/user.module.scss'
import Modal from '../Modal/Modal';


export default function TabContent({users}) {

	const [modalActive, setModalActive] = useState(false);
	const [requiredItem, setReruiredItem] = useState();
	
	const getSelected = (item) => {
		setReruiredItem(item)
		setModalActive(true)
	}

	return (
		
		<div className={styles.tab_content}>
	  		<ul className={stylesUser.user__list}>{users.map(item => <User setReruiredItem = {setReruiredItem} requiredItem = {requiredItem} getSelected = {getSelected} user = {item} modalActive = {modalActive} setModalActive = {setModalActive}/>)}</ul>
			<Modal setReruiredItem = {setReruiredItem} requiredItem = {requiredItem} modalActive = {modalActive} setModalActive = {setModalActive}/>
	  	</div>
		
	)
}
