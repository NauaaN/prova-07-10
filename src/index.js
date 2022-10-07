import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exercicio1 from './pages/exercicio1';
import Exercicio2 from './pages/exercicio2';
import Exercicio3 from './pages/exercicio3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/ex1' element={<Exercicio1 />} />
    <Route path='/ex2' element={<Exercicio2 />} />
    <Route path='/ex3' element={<Exercicio3 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
