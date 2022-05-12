import React from 'react';
import './styles.css';

function Home(){
    
    // Forma temporária de preencher a lista
    const filmes = {
        titulo: 'Gavião Arqueiro',
        cartazUrl: 'https://t.ctcdn.com.br/PXQkTkRGGaZiAc1tGQkGpj_esaU=/720x405/smart/filters:format(webp)/i524983.jpeg',
        id: 1
    };

    return (
        <div className='container-home'>
        <section className='corpo-home'>
            <h2 className='titulo-home'>{filmes.titulo}</h2>
            <img className='img-home' src={filmes.cartazUrl} alt={filmes.titulo}/>
            <a className='botao' href='http://google.com'>Acessar</a>
        </section>
        </div>
    );
}

export default Home;