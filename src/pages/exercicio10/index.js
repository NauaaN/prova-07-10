import { useState } from "react";
import "./index.scss";
import DesenhoLinha from "../../services/linha.js";

export default function Exercicio9() {
    const [qntd, setQntd] = useState();
    const [resp, setResp] = useState([]);

    function Listar() {
        setResp(DesenhoLinha(qntd));
    }

    return (
        <div className="homeex10">
            <div className="ex10">
                <h1 className="txt">Exercicio 10</h1>
            
            <div className="inputs10">
                <input
                    className="input10"
                    type="number"
                    placeholder="insira o numero de inicio"
                    value={qntd}
                    onChange={(e) => setQntd(e.target.value)}/>
            </div>

            <div className="thebuton10">
                <button className="butao10" onClick={Listar}>VERIFICAR</button>
            </div>

            <div className="resposta">
                {resp}
            </div>
            </div>
        </div>
    );
}
