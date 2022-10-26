
export function contarInput (input) {
    let x = [];
    for (let i = 1; i <= input; i++) {
        x.push(i)

    }
        return x
}

 export function calcularMedia(nota){
    let soma = 0;
    for (let voltas = 0; voltas < nota.length; voltas++){
        soma = soma + nota[voltas]
    }
     let m = soma / nota.length
    return Math.round(m);
}

export function calcMaior(notas) {
    let m = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] > m) {
            m = notas[volta];
        }
    }
    
    return m;
}

export function calcMenor(notas) {
    let m = 11;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] < m) {
            m = notas[volta];
        }
    }
    
    return m;
}