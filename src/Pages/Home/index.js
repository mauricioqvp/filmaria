import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

// URL da API: https://api.themoviedb.org/3/movie/550?api_key=77fdd7b7cf51e014c301e980d064c93b

function Home(){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "77fdd7b7cf51e014c301e980d064c93b",
                    language: "pt-BR",
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0,10));
            setLoading(false);
        }
        loadFilmes();
    },[]);

    if (loading){
        return(
            <div className='loading'>
                Carregando...
            </div>
        )
    }

    return (
        <div className='container-home'>
        <div className='lista-filmes-home'>
            {filmes.map((filme)=>{
                return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filmes/${filme.id}`} >Acessar</Link>
                    </article>
                );
            })}
        </div>
        </div>
    );
}

export default Home;