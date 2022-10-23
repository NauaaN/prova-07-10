
export default function Contar(inicio, fim) {
    let x = [];
    for (let i = inicio; i <= fim; i++) {
        x = [...x, i, '\n'];
    }
    if (inicio > fim)
        return ("Você não pode contar o numero se o fim é menor do que o inicio :(");
    else if (inicio == fim)
        return ("Não é possivel contar numeros iguais :|");
    return x;
};

