import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';




export default (
    <Routes>

        <Route exact path='/' element={ <Landing /> } component={Landing} />
        <Route path='/services' element={ <Services /> } component={Services} />
        <Route path='/aboutus' element={ <AboutUs /> } component={AboutUs} />

    </Routes>
)