import React, {useState, useContext} from 'react';
import {Context} from '../context/Context';


export default function Semn () {
	

	const context = useContext(Context);
	const [semn, setSemn] = useState(context.data.semn);

	function saveSemn() {
		context.saveSemn(semn);
	}

	return (
		<div>
			<select onChange={(e) => setSemn(e.target.value)}>
				<option value='pozitiv' selected={semn === 'pozitiv'}>pozitiv</option>
				<option value='negativ' selected={semn === 'negativ'}>negativ</option>
			</select>
			<button onClick={saveSemn}>Save</button>
			<h3>Rezultat</h3>
			<div>
				{context.data.result.map((value, index) => (
					<div key={index}>Rezultat index {index} este: {value}</div>
				))}
			</div>
		</div>
	)

}
