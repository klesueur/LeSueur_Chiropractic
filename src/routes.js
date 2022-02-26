import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Landing from './components/Landing/Landing';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';




export default (
    <Routes>

        <Route path='/' element={Landing} />
        <Route path='/aboutus' element={AboutUs} />
        <Route path='./services' element={Services} />

    </Routes>
)