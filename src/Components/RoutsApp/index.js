import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Favoritos from '../../Pages/Favoritos';
import NoPage from '../../Pages/NoPage';
import Home from '../../Pages/Home';


function RoutsApp(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home />}/>
                <Route index element={ <Home />}/>
                <Route path='favoritos' element={ <Favoritos />}/>
                <Route path='*' element={ <NoPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RoutsApp;