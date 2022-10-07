import { useState, useEffect } from "react"
import "./index.scss"

export default function Exercicio3(){
const [gramas, setGramas] = useState();
const [resp, setResp] = useState("")
    function calcularSorvete(){
        if(gramas < 1000){
            setResp(gramas*3.50/ 100)
        }
        else{
            setResp(gramas*3.00 / 100)
        }
        if(gramas <= 0){
            setResp('peso invalido') 
        }

    }

    useEffect(() =>{
        calcularSorvete()
    }, [resp])

    return(
        <div>
             <h1>Exercicio 3</h1>

            <div>
            <input type='text' placeholder="informe as gramas " value={gramas} onChange={e => setGramas(e.target.value)} />
            <button onClick={calcularSorvete}>VERIFICAR PREÇO</button>
            </div>
            <div>
              {resp}
             </div>
        </div>
    )
}