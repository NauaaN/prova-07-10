import { useState, useEffect } from "react"
import "./index.scss"

export default function Exercicio2() {
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [resp, setResp] = useState("")

    function libra() {
        if (dia >= 23 && mes === "setembro" || dia <= 22 && mes === "outubro") {
            setResp("sim, você é de libra")
        }
        else {
            setResp("nao, você não é de libra ")
        }
    }


    return (
        <div className="homeex2">
            <div className="ex2">
                <h1 className="txt">Exercicio 2</h1>
                <div className="inputs2">
                    <input type='number' className="input2" placeholder="informe o dia" value={dia} onChange={e => setDia(e.target.value)} />
                    <input type='text' className="input2" placeholder="informe o mes" value={mes} onChange={e => setMes(e.target.value)} />
                </div>
                <div className="thebuton2">
                    <button className="butao2" onClick={libra}>VERIFICAR</button>
                </div>
                <div className="resposta">
                    {resp}
                </div>
            </div>
        </div>

    )
}