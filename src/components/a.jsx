import React, {useState, useContext} from 'react';
import {Context} from '../context/Context';


export default function A () {

	const context = useContext(Context);
	const [a, setA] = useState(context.data.a);

	function saveA() {
		context.saveA(a);
	}

	return (
		<div>
			<input type="text" value={a} onChange={(e) => setA(Number(e.target.value))} />
			<button onClick={saveA}>Save</button>
			<h3>Rezultat</h3>
			<div>
				{context.data.result.map((value, index) => (
					<div key={index}>Rezultat index {index} este: {value}</div>
				))}
			</div>
		</div>
	)

}
