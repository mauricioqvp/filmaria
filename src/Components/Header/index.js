import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header(){
    return (
        <header>
            <div className='container'>
                <Link to="/" className='titulo'>Prime Flix</Link>
                <Link to="/favoritos" className='meusFilmes'>Meus filmes</Link>
            </div>
        </header>
    );
}

export default Header;