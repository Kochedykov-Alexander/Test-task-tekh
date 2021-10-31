import React from 'react'
import TabContent from './TabContent';
import styles from '../../../scss/tab.module.scss'

export default function Tabs({ items }) {

	const [active, setActive ] = React.useState(0);
  
	const openTab = e => setActive(+ e.target.dataset.index);
  
	return (
	  <div>
		<div className={styles.tab}>
			<div className={styles.tab__links}>
				{items.map((n, i) => (
					<button
					className={`${styles.tab__button} ${i === active ?  styles.active + ' mx-3' : ' mx-3'}`}
					onClick={openTab}
					data-index={i}
					>{n.title}</button>
				))}
			</div>
		</div>
		{items[active] && <TabContent {...items[active]} />}
	  </div>
	);
}
