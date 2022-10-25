import { useState, useEffect } from "react";
import "./index.scss";
import contarInput from "../../services/estudantes";

export default function Exercicio14() {
    const [aluno, setAluno] = useState([]);
    const [input, setInput] = useState([]);
    const [resp, setResp] = useState([]);


    function aparecerInputs() {
        setResp(contarInput(input));
    }

    return (
        <div className="homeex9">
            <div className="ex9">
                <h1 className="txt">Exercicio 14</h1>
                <div className='inputs12'>
                    <input
                        className='input12'
                        type="number"
                        placeholder="insira a quantidade de estudantes"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button onClick={aparecerInputs}>APARECER</button>
                    <div className="baixo">
                        {resp.map((item) => (
                            <div className="pra-baixo">
                                <p>ALUNO {item}</p><input value={aluno}  onChange={(e) => setAluno(e.target.value)} type='number' ></input>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                </div>
                <button> CONCLUIR </button>
            </div>
        </div>
    );
}