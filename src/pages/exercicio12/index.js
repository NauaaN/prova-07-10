import './index.scss';
import Cafeeeeee from '../../services/cafe';
import { useState } from 'react';

export default function Exercicio12() {
    const [estudantes, setEstundantes] = useState('');
    const [litros, setLitros] = useState('');
    const [mililitrosConsumidos, setMililitrosConsumidos] = useState('');
    const [resp, setResp] = useState();

    function mostrar() {
     setResp(Cafeeeeee(estudantes, litros, mililitrosConsumidos))
 }
    return (

        <div className='homeex11'>
        <div className='ex11'>
            <h1 className='txt'>Exercicio 12</h1>
            <div className='inputs11'>
                <input
                    className='input11'
                    type="number"
                    placeholder="insira o numero de estudantes"
                    value={estudantes}
                    onChange={(e) => setEstundantes(Number(e.target.value))} />
            </div>
            <div>
                <input
                    className='input11'
                    type="number"
                    placeholder="insira a capacidade de litros  "
                    value={litros}
                    onChange={(e) => setLitros(Number(e.target.value))} />
                </div>
                
                <div>
                <input
                    className='input11'
                    type="number"
                    placeholder="insira os mililitros consumidos por cada aluno"
                    value={mililitrosConsumidos}
                    onChange={(e) => setMililitrosConsumidos(Number(e.target.value))} />
            </div>


            <div className='thebutton11'>
                <button className='butao11' onClick={mostrar}>VERIFICAR</button>
            </div>

            <div className='resposta'>{resp}</div>
        </div>
    </div>
    )
          
}
