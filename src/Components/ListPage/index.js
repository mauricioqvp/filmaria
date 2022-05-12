import React from 'react';
import './styles.css';


function ListPage(Props) {
    
    // Forma temporária de preencher a lista
    const lista = {
            titulo: 'Gavião Arqueiro',
            detalhesUrl: 'http://google.com',
            id: 1
        };
    
    return (
        <article className='article-favoritos'>
            <span className='titulo-favoritos'>{lista.titulo}</span>
            <a href={lista.detalhesUrl} className='detalhes-favoritos'>Ver detalhes</a>
            <a href={lista.detalhesUrl} className='excluirBtn-favoritos'>Excluir</a>
        </article>
    );
}

export default ListPage;