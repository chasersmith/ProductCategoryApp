import { useState } from "react";

export default function List(props) {

	// State to hold value of what item in list is active/clicked
	let [clickedIndex, setIndex] = useState(0);
	
	let itemList = props.list.map((item, index) =>
		<a key={item.id} 
			className={`list-group-item list-group-item-action ${index == clickedIndex && !props.disableActive ? 'active' : ''}`}
			onClick={() => { itemClicked(item.id, index);}}>
			{item.name}
		</a>
	);

	function itemClicked(id: string, i: number) {
		setIndex(i);
		props.itemSelected(id, i);
	}

	return (
		<div>
			<div className="list-group">
				{itemList}
			</div>
		</div>
	);
}