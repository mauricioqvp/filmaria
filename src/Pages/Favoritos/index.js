import React from 'react';
import './styles.css';
import ListItem from '../../Components/ListItem';

function Favoritos(){
    return (
        <div className='container-favoritos'>
        <section className='corpo-favoritos'>
            <h2 className='h2-favoritos'>Meus Filmes</h2>
            <ListItem/>
        </section>
        </div>
    );
}

export default Favoritos;