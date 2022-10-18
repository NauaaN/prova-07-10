import { useState } from 'react'
import DesenhoRetangulo from '../../services/retangulo';
import './index.scss'


export default function Exercicio9(){

const[base, setBase]= useState();
const[altura, setAltura]= useState();
const[resp, setResp]= useState();


function Listar() {
    setResp(DesenhoRetangulo(base, altura));
}


return(
    <div>
        <div>
            <h1>Exercicio 11</h1>
        </div>
        <div>
                <input
                    type="number"
                    placeholder="insira a base"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}/>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="insira a Altura  "
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}/>
            </div>


            <div>
                <button onClick={Listar}>VERIFICAR</button>
            </div>

            <div>{resp}</div>
    </div>
)
}