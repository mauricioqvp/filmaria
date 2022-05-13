import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './styles.css';

function Header(){
    return (
        <BrowserRouter>
        <header>
            <div className='container'>
                <a to="/" className='titulo'>Prime Flix</a>
                <a className='meusFilmes'>
                    Meus filmes
                </a>
            </div>
        </header>
        </BrowserRouter>
    );
}

export default Header;