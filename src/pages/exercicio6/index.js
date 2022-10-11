
import { useState } from 'react'
import './index.scss'

export default function Exercicio6(){
    const [temperatura, setTemperatura] = useState();
    const [resp, setResp]= useState();

    function febre(){
        if(temperatura <36){
            setResp('A sua situação de temperatura é Hiportemia')
        }
        else if(temperatura >=36 && temperatura <37.6){
            setResp('A sua situação de temperatura é Normal')
        }
        else if(temperatura >37.6 && temperatura <39.6){
            setResp('A sua situação de temperatura é febre')
        }
        else if(temperatura >39.6 && temperatura <41){
            setResp('A sua situação de temperatura é Febre alta')
        }
        else if(temperatura >=41){
            setResp('A sua situação de temperatura é Hipertemia')
        }
        else{
            setResp('invalido')
        }
    }

    return(
        <div className='homeex6'>
            <div className='ex6'>
                <h1 className='txt'>Exercicio 6</h1>
                <div className='inputs6'>
                    <input type='number' className='input6' placeholder='insira a temperatura' value={temperatura} onChange={e => setTemperatura(e.target.value)}/>
                </div>
                <div className='thebutton6'>
                    <button className='butao6' onClick={febre}>CALCULAR</button>
                </div>
                <div className='resposta'>
                    {resp}
                </div>
            </div>
        </div>
    )
}