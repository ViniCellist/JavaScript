alert("Boas vindas ao Jogo do número secreto!");

let numeroSecreto = 5;

let chute = prompt("Escolha um número entre 1 e 10");

if(chute == numeroSecreto) {
    console.log(`Acertou! O número secreto era ${numeroSecreto}!`);
} else if (chute > numeroSecreto) {
    console.log(`o número secreto é menor que ${chute}!`);
} else {
    console.log(`o número secreto é maior que ${chute}!`);
};