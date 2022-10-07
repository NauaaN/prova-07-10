import { useState, useEffect } from "react"
import "./index.scss"

export default function Exercicio2(){
    const[dia ,setDia]= useState('');
    const[mes, setMes]= useState('');
    const [resp, setResp]= useState("")
    
    function libra(){
        if(dia >=23 && mes ==="setembro" || dia <=22 && mes==="outubro"){
            setResp ("sim, você é de libra")
        }
        else{
           setResp ("nao, você não é de libra ")
        }
    }
    useEffect(() =>{
        libra()
    }, [resp])

    return(
        <div>
       
            <h1>Exercicio 2</h1>
        <div>
             <input type='number' placeholder="informe o dia" value={dia} onChange={e => setDia(e.target.value)}/>
            <input type='text' placeholder="informe o mes" value={mes} onChange={e => setMes(e.target.value)} />
            <button onClick={libra}>VERIFICAR</button>
         </div>
         <div>
         {resp}
         </div>
        </div>
        
    )
}