import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Favoritos from '../../Pages/Favoritos';
import Home from '../../Pages/Home';
import Filmes from '../../Pages/Filmes';
import Erro from '../../Pages/Erro';
import Header from '../Header';

function RoutsApp(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route index element={ <Home />}/>
                <Route path='favoritos' element={ <Favoritos />}/>
                <Route path='filmes/:id' element={ <Filmes />}/>

                <Route path='*' element={ <Erro />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutsApp;