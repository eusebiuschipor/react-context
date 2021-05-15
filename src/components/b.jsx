import React, {useState, useContext} from 'react';
import {Context} from '../context/Context';


export default function B () {
	

	const context = useContext(Context);
	const [b, setB] = useState(context.data.b);

	function saveB() {
		context.saveB(b);
	}

	return (
		<div>
			<input type="text" value={b} onChange={(e) => setB(Number(e.target.value))} />
			<button onClick={saveB}>Save</button>
			<h3>Rezultat</h3>
			<div>
				{context.data.result.map((value, index) => (
					<div key={index}>Rezultat index {index} este: {value}</div>
				))}
			</div>
		</div>
	)

}
