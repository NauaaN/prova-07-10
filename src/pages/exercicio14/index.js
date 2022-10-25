import { useState, useEffect } from "react";
import "./index.scss";
import contarInput from "../../services/estudantes";

export default function Exercicio14() {
    const [aluno, setAluno] = useState([]);
    const [input, setInput] = useState([]);
    const [notas, setNotas] = useState([]);
    const [resp, setResp] = useState([]);

    function validar() {
        let y = []
        y = [...y, notas]
        console.log(y)
    }
    function aparecerInputs() {
        setResp(contarInput(input));
    }

    function formarArr(posicao, qntd) {
        notas[posicao] = qntd;
    }


    return (
        <div className="homeex14">
            <div className="ex14">
                <h1 className="txt">Exercicio 14</h1>
                <div className='inputs14'>
                    <input
                        className='input14'
                        type="number"
                        placeholder="insira a quantidade de estudantes"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="butao14" onClick={aparecerInputs}>APARECER</button>

                    <div className="baixo">
                        {resp.map((item, i) => (
                            <div>
                                <p>ALUNO {item}</p><input className="inputmini14" value={notas[i]} onChange={(e) => formarArr(i, e.target.value)} type='number' ></input>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="butao14" onClick={validar}> CONCLUIR </button>
            </div>
        </div>
    );
}