import "./App.css";
import Articles from './components/Articles.js'
import Navigation from './components/Navigation.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login';

function App() {
	return (
		<Router> 
			<Navigation />

			<Switch>
				<Route path='/' exact> 
					<Articles/> 
				</Route>

				<Route path='/login'> 
					<Login />
				</Route>

			</Switch>

			
		</Router>
	);
}

export default App;
