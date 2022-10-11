import { useState } from 'react'
import './index.scss'

export default function Tanque(){
    const[capacidade, setCapacidade]= useState('');
    const[consumo, setConsumo]= useState('');
    const[distancia, setDistancia]= useState('');
    const[resp, setResp]= useState('');

    function calcularParadas(){
        let litros= distancia/consumo;
        let paradas= litros/capacidade; 
        paradas=Math.ceil(paradas);
        setResp('Você precisara fazer ' +  paradas.toFixed(1) + ' paradas para abastecer')
        
    }
    return(
        <div>
            <div>
                <h1>Exercicio 5</h1>
                <div>
                    <input type='number' placeholder='insira a capacidade' value={capacidade} onChange={e => setCapacidade(e.target.value)}/>
                    <input type='number' placeholder='insira a consumo' value={consumo} onChange={e => setConsumo(e.target.value)}/>
                    <input type='number' placeholder='insira a distancia' value={distancia} onChange={e => setDistancia(e.target.value)}/>
                </div>
                <div>
                    <button onClick={calcularParadas}>CALCULAR</button>
                </div>
                <div>{resp}</div>
            </div>
        </div>
    )
}