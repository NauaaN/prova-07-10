export default function DesenhoRetangulo(base, altura) {
    let x = [];
    for (let i = 1; i < base; i++) {
        for(let j = 1; j < altura; j++){
            x.push(" * ");
        }
        
    }
    return x;
}
