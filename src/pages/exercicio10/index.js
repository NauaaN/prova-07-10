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
        <div>
            <div>
                <h1>Exercicio 10</h1>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="insira o numero de inicio"
                    value={qntd}
                    onChange={(e) => setQntd(e.target.value)}/>
            </div>

            <div>
                <button onClick={Listar}>VERIFICAR</button>
            </div>

            <div>{resp}</div>
        </div>
    );
}
