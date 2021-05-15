import React, {useState, useContext} from 'react';
import {Context} from '../context/Context';


export default function X () {
	const context = useContext(Context);
	const [x, setX] = useState(context.data.x);

	

	function saveX() {
		context.saveX(x.split(','));
	}

	return (
		<div>
			<input type="text" value={x} onChange={(e) => setX(e.target.value)} />
			<button onClick={saveX}>Save</button>
			<h3>Rezultat</h3>
			<div>
				{context.data.result.map((value, index) => (
					<div key={index}>Rezultat index {index} este: {value}</div>
				))}
			</div>
		</div>
	)

}
