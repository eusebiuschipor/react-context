import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import axios from 'axios';
import { Context } from '../context/Context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const context = useContext(Context);

    const setUser = (user) => {
        localStorage.setItem('token', user.token);
        localStorage.setItem('username', user.username);
        context.setUserHandler(user);
    }

    const login = (e) => {
        e.preventDefault();

        axios
            .post("http://apps.loopevo.com/apis/posts/login.php", {
                username: username,
                password: password
            })
            .then((response) => {
                setUser({
                    token: response.data.token,
                    username: response.data.username
                });
                history.push('/');
            })
            .catch((error) => {
                alert('Username or password is invalid');
            });
    }

    return (
        <div className="container">
            <h1>Login:</h1>
            <form>
                <Input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Login" onClick={login} />
            </form>
        </div>
    );
}

export default Login;