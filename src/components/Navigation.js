import React from 'react';
import {Link} from 'react-router-dom';


export default function Navigation () {
    return (
        <header> 
            <nav> 
                <ul className="menu">
                    <li > <Link to='/a'> A </Link></li> 
                    <li > <Link to='/b'> B </Link></li> 
					<li > <Link to='/c'> C </Link></li>
					<li > <Link to='/x'> X </Link></li>
					<li > <Link to='/semn'> Semn </Link></li>
                </ul> 
            </nav>
        </header>
    );
}