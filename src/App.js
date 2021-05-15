import "./App.css";
import Navigation from './components/Navigation.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import A from './components/a';
import B from './components/b';
import C from './components/c';
import X from './components/x';
import Semn from './components/semn';
import React, { useEffect, useContext } from 'react';
import {Context} from './context/Context';

function App() {

	const context = useContext(Context);

	useEffect( () => {
			// If data exist in local storage load it, othewise set default values
			const a = localStorage.getItem('a') ? localStorage.getItem('a') : 1;
			const b = localStorage.getItem('b') ? localStorage.getItem('b') : 2;
			const c = localStorage.getItem('c') ? localStorage.getItem('c') : 3;
			const x = localStorage.getItem('x') ? localStorage.getItem('x') : [1, 2, 3];
			const semn = localStorage.getItem('semn') ? localStorage.getItem('semn') : 'pozitiv';
			const result = localStorage.getItem('result') ? localStorage.getItem('result').split(',') : [1, 2, 3];
			// Send local data to context
			context.saveAllData(a, b, c, x, semn, result);
	}, [])

	

	return (
		<Router>
			<Navigation />

			<Switch>

				<Route exact path="/" render={() => (
					<Redirect to="/a"/>
				)}/>

				<Route path='/a'>
					<A />
				</Route>

				<Route path='/b'>
					<B />
				</Route>

				<Route path='/c'>
					<C />
				</Route>

				<Route path='/x'>
					<X />
				</Route>

				<Route path='/semn'>
					<Semn />
				</Route>

			</Switch>


		</Router>
	);
}

export default App;
