import { useState, useEffect } from "react";
import "./index.scss"

export default function Exercicio1() {
    const [qntdpeq, setQntPeq] = useState();
    const [qntdmed, setQntMed] = useState();
    const [qntdgrnd, setQntGrnd] = useState();
    const [desc, setDesc] = useState();
    const [resp, setResp] = useState();

    function calcAcai() {
        let total = qntdpeq * 13.50 + qntdmed * 15 + qntdgrnd * 17.50;
        let desconto = total * (desc / 100);
        let resposta = total - desconto;
        setResp(resposta);
    }


    return (
        <div className="homeex1">
            <div className="ex1">
                <h1 className="txt">Exercicio 1</h1>
                <div className="inputs">
                    <input type="number" placeholder="pequeno" className="input" value={qntdpeq} onChange={e => setQntPeq(Number(e.target.value))} />
                    <input type="number" placeholder="medio" className="input" value={qntdmed} onChange={e => setQntMed(Number(e.target.value))} />
                    <input type="number" placeholder="grande" className="input" value={qntdgrnd} onChange={e => setQntGrnd(Number(e.target.value))} />
                    <input type="number" placeholder="desconto" className="input" value={desc} onChange={e => setDesc(Number(e.target.value))} />
                </div>
                <div className="thebotton">
                    <button className="butao" onClick={calcAcai}> CALCULAR </button>
                </div>
            </div>
            <div className="resposta">
                {resp}
            </div>
        </div>
    )
}