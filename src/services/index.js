



export default function Contar(inicio, fim){
    let x = [];
    for(let i=inicio; i<=fim; i++ ){ 
        x = [...x, i];
        x.push(" ")
    }
    return x;
};

