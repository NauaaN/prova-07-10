import './index.scss';
import { useState } from 'react';

export default function Exercicio7() {
    
    const [ganhos, setGanhos] = useState();
    const [gastos, setGastos] = useState();
    const [resp, setResp] = useState();
    const [ test, setTest] = useState();
    
    function sitOrcamento() {
        let porcentagem = gastos/ganhos *100
        if(gastos > ganhos){
            setResp('Orçamento comprpmetido')
        }

        if (porcentagem > 81 && porcentagem <= 100 ) {
            setResp('Cuidado seu orçamento pode ficar comprometido')
        }
        else if ( porcentagem > 50 &&  porcentagem <= 80 ) {
            setResp('Atenção conter os gastos')
        }
        else if ( porcentagem > 21 && porcentagem <= 49 ) {
            setResp('Muito bem seus gastos não ultrapassaram metade dos ganhos')
        }
        else if ( porcentagem > 0 && porcentagem <= 21 ) {
            setResp('Parabens você esta gerenciando bem o seu orçamento')
        }
        else {
            setResp('Orçamento invalido')
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