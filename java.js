alert("Seja bem vindo ao jogo de adivinhação!");
let numeroSecreto = parseInt(Math.random() * 100 + 2);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt ("Escolha um número entre 1 e 101");
    if (chute == numeroSecreto){
        break;
    } else {
        if (chute > numeroSecreto){
            alert (`O número é menor que ${chute}`);
        } else{
            alert (`O número é maior que ${chute}`);
        }
        tentativas++;
    }
}

if (tentativas > 1){
    alert(`Voce descobriu o número secreto com ${tentativas} tentativas.`)

}else{
    alert(`Voce descobriu o numero com ${tentativas} tentativa.`)
}