import { useState, useEffect } from "react";
import "./index.scss";
import Contar from "../../services";

export default function Exercicio9() {
    const [inicio, setInicio] = useState();
    const [fim, setFim] = useState();
    const [resp, setResp] = useState();

    function Listar() {
        setResp(Contar(inicio, fim));
    }

    return (
        <div>
            <div>
                <h1>Exercicio 9</h1>
                <div>
                    <input
                        type="number"
                        placeholder="insira o numero de inicio"
                        value={inicio}
                        onChange={(e) => setInicio(e.target.value)}/>
                    <input
                        type="number"
                        placeholder="insira o numero de fim"
                        value={fim}
                        onChange={(e) => setFim(e.target.value)}/>
                </div>

                <div>
                    <button onClick={Listar}>VERIFICAR</button>
                </div>

                <div>{resp}</div>
            </div>
        </div>
    );
}
