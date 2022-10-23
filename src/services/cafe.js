export default function Cafeeeeee(estudantes, litros, mililitrosConsumidos) {
    let litrosNecessarios = estudantes * mililitrosConsumidos; // 3000
    let conversao = litrosNecessarios / 1000; // 3 litros
    if (litros < conversao) { 
        while (litros < conversao) {
                litros+=litros
        }
        return litros        
        }
        else if (litros >= conversao) {
            let resul = litros;
            return resul
        }
    }



let c = Cafeeeeee(2, 1, 2000);
console.log(c);