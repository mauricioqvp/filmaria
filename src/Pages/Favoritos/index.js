import React from 'react';
import './styles.css';
import ListPage from '../../Components/ListPage';

function Favoritos(){
    return (
        <div className='container-favoritos'>
        <section className='corpo-favoritos'>
            <h2 className='h2-favoritos'>Meus Filmes</h2>
            <ListPage/>
        </section>
        </div>
    );
}

export default Favoritos;