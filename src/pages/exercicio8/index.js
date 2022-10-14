import { useState } from 'react'
import './index.scss'

export default function Exercicio8() {
    const [inteiras, setInteiras] = useState();
    const [meias, setMeias] = useState();
    const [diaSemana, setDiaSemana] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resp, setResp] = useState('');

    function cinema() {
        if (diaSemana != 'quarta feira' && nacional != true) {
            setResp('O total a se pagar é de R$ '+ Number(inteiras* 28.50+ meias*14.25 ) )
           
       }
        else if (diaSemana == 'quarta feira' && nacional != true) {
            setResp('O total a se pagar é de R$ '+  Number(inteiras * 14.25 + meias * 14.25 ))
        }
            
        else if (diaSemana == 'quarta feira' && nacional == true) {
            setResp('O total a se pagar é de R$ '+ Number( inteiras*5 + meias * 5 ) )
        }
    }
    return (
        <div>
        <div className='homeex5'>
         <div className='ex5'>
             <h1 className='txt'>Exercicio 8</h1>
             <div className='inputs5'>
                 <input className='input5' type='number' placeholder='insira quantidade de inteiras' value={inteiras} onChange={e => setInteiras(Number(e.target.value))}/>
                        <input className='input5' type='number' placeholder='insira quantidade de meias' value={meias} onChange={e => setMeias(Number(e.target.value))} />
                        <input className='input5' type='text' placeholder='insira o dia da semana' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
                        <input className='input5' type='checkbox' placeholder='insira a nacionalidade do filme' checked={nacional} onChange={e => setNacional(e.target.checked)}/>
             </div>
             <div className='thebutton5'>
                 <button className='butao5' onClick={cinema}>CALCULAR</button>
             </div>
             <div className='resposta'>{resp}</div>
         </div>
     </div>
     </div>
     
    )

}