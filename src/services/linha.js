export default function DesenhoLinha(qntd) {
    let x = [];
    for (let i = 1; i <= qntd; i++) {
        x.push(" *" );
    }
    if(qntd < 0)
    return("Digite um numero valido!");
    else return x;
}
