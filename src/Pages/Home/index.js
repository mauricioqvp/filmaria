import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

// URL da API: https://api.themoviedb.org/3/movie/550?api_key=77fdd7b7cf51e014c301e980d064c93b

function Home(){
    
    // Forma temporária de preencher a lista
    /*const filmes = {
        titulo: 'Gavião Arqueiro',
        cartazUrl: 'https://t.ctcdn.com.br/PXQkTkRGGaZiAc1tGQkGpj_esaU=/720x405/smart/filters:format(webp)/i524983.jpeg',
        id: 1
    };
    */

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "77fdd7b7cf51e014c301e980d064c93b",
                    lenguage: "pt-BR",
                    page: 1
                }
            })

            console.log(response.data.results);
            setFilmes(response.data.results.slice(0,10));
            setLoading(false);
        }
        loadFilmes();
    },[]);

    if (loading){
        return(
            <div className='loading'>Carregando...</div>
        );
    }


    return (
        <div className='container-home'>
        <div className='lista-filmes-home'>
            {filmes.map((filme)=>{
                return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filmes.title}/>
                        <Link to={`/filmes/${filme.id}`} href='http://google.com'>Acessar</Link>
                    </article>
                );
            })}
        </div>
        </div>
    );
}

export default Home;