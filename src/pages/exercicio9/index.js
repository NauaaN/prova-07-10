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
        <div className="homeex9">
            <div className="ex9">
                <h1 className="txt">Exercicio 9</h1>
                <div className="inputs9">
                    <input
                        className="input9"
                        type="number"
                        placeholder="insira o numero de inicio"
                        value={inicio}
                        onChange={(e) => setInicio(Number(e.target.value))}/>
                    <input
                        className="input9"
                        type="number"
                        placeholder="insira o numero de fim"
                        value={fim}
                        onChange={(e) => setFim(Number(e.target.value))}/>
                </div>

                <div className="thebutton9">
                    <button className= "butao9"onClick={Listar}>VERIFICAR</button>
                </div>

                <div className="resposta">{resp}</div>
            </div>
        </div>
    );
}
