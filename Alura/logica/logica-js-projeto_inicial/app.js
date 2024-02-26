alert("Boas vindas ao Jogo do número secreto!");

let numeroSecreto = 5;

let chute = prompt("Escolha um número entre 1 e 10");

if(chute == numeroSecreto) {
    console.log('Acertou!');
} else if (chute > numeroSecreto) {
    console.log('o número secreto é menor!')
} else {
    console.log('o número secreto é maior')
}