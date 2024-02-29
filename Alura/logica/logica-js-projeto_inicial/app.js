alert("Boas vindas ao Jogo do número secreto!");

let numeroSecreto = parseInt(Math.random() * 100 + 1);

let chute;
let tries = 1;

while(chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 100");
    if(chute == numeroSecreto) {
        alert(`Acertou! O número secreto era ${numeroSecreto}!`);
        alert(`Tentativas: ${tries}`)
        break;
    } else if (chute > numeroSecreto) {
        alert(`o número secreto é menor que ${chute}!`);
    } else {
        alert(`o número secreto é maior que ${chute}!`);
    };
    tries++
}

