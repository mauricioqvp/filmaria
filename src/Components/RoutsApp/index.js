import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Favoritos from '../../Pages/Favoritos';
import NoPage from '../../Pages/NoPage';
import Home from '../../Pages/Home';
import Filmes from '../../Pages/Filmes';


function RoutsApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route index element={ <Home />}/>
                <Route path='favoritos' element={ <Favoritos />}/>
                <Route path='filmes/:id' element={ <Filmes />}/>
                <Route path='*' element={ <NoPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutsApp;