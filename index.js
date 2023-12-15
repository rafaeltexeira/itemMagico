//Desafio Classificador de nível de Herói

let nomeDoHeroi = "Mago - Rafael"
let xpdoHeroi = 6000

let nivelDoHeroi;
if (xpdoHeroi <1000){
    nivelDoHeroi = "ferro";
}else if (xpdoHeroi >= 1001 && xpdoHeroi <= 2000){
    nivelDoHeroi= "bronze"
} else if (xpdoHeroi >= 2001 && xpdoHeroi <= 5000){
    nivelDoHeroi = "prata"
} else if (xpdoHeroi >= 6001 && xpdoHeroi <= 7000){
    nivelDoHeroi = "Ouro"
} else if (xpdoHeroi >= 7001 && xpdoHeroi <= 8000){
    nivelDoHeroi = "Platina"
} else if (xpdoHeroi >= 8001 && xpdoHeroi <= 9000){
    nivelDoHeroi = "Ascendente"
} else if (xpdoHeroi >= 9001 && xpdoHeroi <= 10.000) {
    nivelDoHeroi = "Imortal"
} else {
    nivelDoHeroi = "Radiante"
}

console.log ("Heroi de nome" + nomeDoHeroi + " esta no nivel " + nivelDoHeroi)