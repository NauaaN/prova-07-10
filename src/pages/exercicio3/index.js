import { useState, useEffect } from "react"
import "./index.scss"

export default function Exercicio3() {
    const [gramas, setGramas] = useState();
    const [resp, setResp] = useState("")
    function calcularSorvete() {
        if (gramas < 1000) {
            setResp(gramas * 3.50 / 100)
        }
        else {
            setResp(gramas * 3.00 / 100)
        }
        if (gramas <= 0) {
            setResp('peso invalido')
        }

    }


    return (
        <div className="homeex3">
            <div className="ex3">
                <h1 className="txt">Exercicio 3</h1>
                <div className="inputs3">
                    <input type='text' className="input3" placeholder="informe as gramas " value={gramas} onChange={e => setGramas(e.target.value)} />
                </div>
                <div className="thebutton3">
                    <button className='butao3' onClick={calcularSorvete}>VERIFICAR PREÇO</button>
                </div>
                <div className="resposta">
                    {resp}
                </div>
            </div>
        </div>
    )
}