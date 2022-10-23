import { useState } from 'react'
import DesenhoRetangulo from '../../services/retangulo';
import './index.scss'


export default function Exercicio11() {

    const [base, setBase] = useState([]);
    const [altura, setAltura] = useState([]);
    const [resp, setResp] = useState([]);


    function Listar() {
        setResp(DesenhoRetangulo(base, altura));
    }


    return (
        <div className='homeex11'>
            <div className='ex11'>
                <h1 className='txt'>Exercicio 11</h1>
                <div className='inputs11'>
                    <input
                        className='input11'
                        type="number"
                        placeholder="insira a base"
                        value={base}
                        onChange={(e) => setBase(e.target.value)} />
                </div>
                <div>
                    <input
                        className='input11'
                        type="number"
                        placeholder="insira a Altura  "
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)} />
                </div>


                <div className='thebutton11'>
                    <button className='butao11' onClick={Listar}>VERIFICAR</button>
                </div>

                <div className='resposta'>{resp.map((item) => (
                            <div className="pra-baixo">
                                {item}
                            </div>
                        ))}</div>
            </div>

            <br/>

            <div className='resposta'> {resp.map(item =>
                    <div>
                    {item.map(item=> 
                    <span> o </span>)}
                    </div>)}
                </div>

            <br/>

            <div className='resposta'> {resp.map(item =>
                    <div>
                    {item.map(item=> 
                    <span> {'\b'} </span>)}
                    </div>)}
            </div>

            <br/>

            <div className='resposta'> {resp.map(item =>
                    <div >
                    {item.map(item=> 
                    <span> <img className='tamanho' src='/assets/images/imagemEx11.jpeg'/> </span>)}
                    </div>)}
            </div>

        </div>
    )
}