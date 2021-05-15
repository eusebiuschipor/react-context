import React, {useState, useContext} from 'react';
import {Context} from '../context/Context';


export default function C () {
	

	const context = useContext(Context);
	const [c, setC] = useState(context.data.c);

	function saveC() {
		context.saveC(c);
	}

	return (
		<div>
			<input type="text" value={c} onChange={(e) => setC(Number(e.target.value))} />
			<button onClick={saveC}>Save</button>
			<h3>Rezultat</h3>
			<div>
				{context.data.result.map((value, index) => (
					<div key={index}>Rezultat index {index} este: {value}</div>
				))}
			</div>
		</div>
	)

}
