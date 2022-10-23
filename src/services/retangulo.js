export default function DesenhoRetangulo(base, altura) {
    let x = [];

    for (let i = 1; i <= altura; i++) {
        let y = [];
        for (let i = 1; i <= base; i++) {
            y.push(" *");
        }
        x.push(y);
    }

    return x;
}
