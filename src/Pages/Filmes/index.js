import React from 'react';
import { } from 'react-router-dom';
import './styles.css';

function Filmes(props) {

    // Forma temporária de preencher a lista
    const detalhes = {
        id: 1,
        titulo: 'Eternos',
        cartazUrl: 'https://br.web.img3.acsta.net/r_654_368/newsv7/21/03/25/22/16/2662420.jpg',
        textoSinopse: 'Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.',
        nota: 7.2,
        trailer: 'https://youtu.be/PJza3ZaFeAU'
    };

    return (
        <div className='container-filmes'>
            <section className='corpo-filmes'>
                <h2 className='h2-filmes'>{detalhes.titulo}</h2>
                <img className='img-detalhes' src={detalhes.cartazUrl} alt={detalhes.titulo} />
                <h4 className='h4-detalhes' >Sinopse</h4>
                <p className='p-detalhes'>{detalhes.textoSinopse}</p>
                <h4>Avaliação: {detalhes.nota}/10</h4>
                <div className='botao-detalhes-container'>
                    <a href="http://goole.com" className='botao-detalhes'>Salvar</a>
                    <a href="http://goole.com" className='botao-detalhes'>Trailer</a>
                </div>
            </section>
        </div>
    );
}

export default Filmes;