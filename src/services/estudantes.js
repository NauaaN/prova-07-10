function calcularMedia(nota, alunos){
    let media = (nota + nota) / alunos;
    return media;
}


export default function contarInput (input) {
    let x = [];
    for (let i = 1; i <= input; i++) {
        x = [...x, i];
        console.log(x)

    }
        return x
}

