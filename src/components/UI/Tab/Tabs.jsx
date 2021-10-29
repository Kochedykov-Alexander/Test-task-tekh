import React from 'react'
import TabContent from './TabContent';
import '../../../scss/tabs.css'

export default function Tabs({ items }) {

	const [active, setActive ] = React.useState(0);
  
	const openTab = e => setActive(+ e.target.dataset.index);
  
	return (
	  <div>
		<div className="tab">
			<div className="tab__links">
				{items.map((n, i) => (
					<button
					className={`tab__button ${i === active ? 'active mx-3' : 'mx-3'}`}
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
