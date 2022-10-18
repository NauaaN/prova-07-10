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
import Exercicio9 from './pages/exercicio9';
import Exercicio10 from './pages/exercicio10';
import Exercicio11 from './pages/exercicio11';




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
    <Route path='/ex9' element={<Exercicio9 />} />
    <Route path='/ex10' element={<Exercicio10 />} />
    <Route path='/ex11' element={<Exercicio11 />} />
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
