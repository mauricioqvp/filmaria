import React from 'react';
import './styles.css';

function Header(){
    return (
        <header>
            <div className='container'>
                <div className='titulo'>Prime Flix</div>
                <a className='meusFilmes'>
                    Meus filmes
                </a>
            </div>
        </header>
    );
}

export default Header;