import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exercicio1 from './pages/exercicio1';
import Exercicio2 from './pages/exercicio2';
import Exercicio3 from './pages/exercicio3';
import Exercicio4 from './pages/exercicio4';
import Exercicio5 from './pages/exercicio5';
import Exercicio6 from './pages/exercicio6';
import Exercicio7 from './pages/exercicio7';
import Exercicio8 from './pages/exercicio8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/ex1' element={<Exercicio1 />} />
    <Route path='/ex2' element={<Exercicio2 />} />
    <Route path='/ex3' element={<Exercicio3 />} />
    <Route path='/ex4' element={<Exercicio4 />} />
    <Route path='/ex5' element={<Exercicio5 />} />
    <Route path='/ex6' element={<Exercicio6 />} />
    <Route path='/ex7' element={<Exercicio7 />} />
    <Route path='/ex8' element={<Exercicio8 />} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
