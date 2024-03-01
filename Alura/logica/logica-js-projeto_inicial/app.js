alert("Boas vindas ao Jogo do número secreto!");

let numeroMaximo = prompt("Digite o valor máximo que será sorteado");

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tries = 1;

while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
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

