import { useState, useEffect } from "react";
import "./index.scss"

export default function Exercicio1(){
const [qntdpeq, setQntPeq] = useState();
const [qntdmed, setQntMed] = useState();
const [qntdgrnd, setQntGrnd] = useState();
const [desc, setDesc] = useState();
const [resp, setResp] = useState();

    function calcAcai(){
      let total=  qntdpeq*13.50 +  qntdmed*15 +  qntdgrnd *17.50;
      let desconto = total*(desc/100);
      let resposta= total - desconto;
      setResp(resposta);
    }
    useEffect(() =>{
        calcAcai()
    }, [resp])

    return(
        <div className="homeex1">
            <div>
                <h1>Exercicio 1</h1>
                <input type ="number" placeholder="pequeno" value={qntdpeq} onChange={ e=> setQntPeq(Number(e.target.value))} />
                <input type ="number" placeholder="medio" value={qntdmed} onChange={ e=> setQntMed(Number(e.target.value) ) }/>
                <input type ="number" placeholder="grande" value={qntdgrnd} onChange={ e=> setQntGrnd(Number(e.target.value))  }/>
                <input type ="number" placeholder="desconto" value={desc} onChange={ e=> setDesc(Number(e.target.value) ) }/>
        
            </div>
            <div>
                <button onClick={calcAcai}> CALCULAR </button> 
            </div>
            <div>
                
            </div>
        <div>
            {resp}
        </div>
        </div>
    )
}