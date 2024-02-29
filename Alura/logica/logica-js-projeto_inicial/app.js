alert("Boas vindas ao Jogo do número secreto!");

let numeroSecreto = 5;

let chute;
let tries = 1;

while(chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 10");

    if(chute == numeroSecreto) {
        alert(`Acertou! O número secreto era ${numeroSecreto}!`);
        alert(`Tentativas: ${tries}`)
    } else if (chute > numeroSecreto) {
        alert(`o número secreto é menor que ${chute}!`);
    } else {
        alert(`o número secreto é maior que ${chute}!`);
    };
    tries++
}

