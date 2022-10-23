import { useState, useEffect } from 'react'
import './index.scss'



export default function SalarioLiquido() {
    const [salario, setSalario] = useState('');
    const [bonus, setBonus] = useState('');
    const [desconto, setDesconto] = useState('');
    const [resp, setResp] = useState('');

    function calcularSalario() {
        let x = salario * bonus / 100;
        let y = salario + x - desconto;
        setResp('Seu salario é de R$' + y)
    }

    return (
        <div className='homeex4'>
            <div className='ex4'>
                <h1 className='txt'>Exercicio 4</h1>
                <div className='inputs4'>
                    <input className='input4' type='number' placeholder='insira o salario' value={salario} onChange={e => setSalario(Number(e.target.value))} />
                    <input className='input4' type='number' placeholder='insira o bonus' value={bonus} onChange={e => setBonus(Number(e.target.value))} />
                    <input className='input4' type='number' placeholder='insira o desconto' value={desconto} onChange={e => setDesconto(Number(e.target.value))} />
                </div>
                <div className='thebutton4'>
                    <button className='butao4' onClick={calcularSalario}>CALCULAR</button>
                </div>
                <div className='resposta'>{resp}</div>
            </div>
        </div>
    )
}