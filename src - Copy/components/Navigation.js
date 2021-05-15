import React from 'react';
import {Link} from 'react-router-dom';


export default function Navigation () {
    return (
        <header> 
            <nav> 
                <ul className="menu">
                    <li > <Link to='/'> Home </Link></li> 
                    <li > <Link to='/login'> Login </Link></li> 
                </ul> 
            </nav>
        </header>
    );
}