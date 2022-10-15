import './index.scss';
import { useState } from 'react';

export default function Exercicio7() {
    
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();
    const [resp, setResp] = useState();
    
    function sitOrcamento() {
        if (gastos > ganhos) { 
            setResp('Orçamento comprpmetido');
        }
        else if (ganhos * 81/100 > gastos <= 50/100 ) {
            setResp('Cuidado seu orçamento pode ficar comprometido')
        }
        else if ( ganhos * 50/100>  gastos <=80/100  ) {
            setResp('Atenção conter os gastos')
        }
        else if ( ganhos * 21/100>  gastos <= 49/100  ) {
            setResp('Muito bem seus gastos não ultrapassaram metade dos ganhos')
        }
        else if ( ganhos * 0/100>  gastos <= 20/100  ) {
            setResp('Parabens você esta gerenciando bem o seu orçamento')
        }
        else {
            setResp('invalido')
        }
          
    }

    return (
        <div>
           <div className='homeex7'>
            <div className='ex7'>
                <h1 className='txt'>Exercicio 7</h1>
                <div className='inputs7'>
                    <input className='input7' type='number' placeholder='insira os ganhos' value={ganhos} onChange={e => setGanhos(e.target.value)}/>
                    <input className='input7' type='number' placeholder='insira os gastos' value={gastos} onChange={e => setGastos(e.target.value)}/>
                </div>
                <div className='thebutton7'>
                    <button className='butao7' onClick={sitOrcamento}>CALCULAR</button>
                </div>
                <div className='resposta'>{resp}</div>
            </div>
        </div>
        </div>
    )

}