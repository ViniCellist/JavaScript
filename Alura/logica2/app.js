const title = document.querySelector('h1');
const paragraph = document.querySelector('p');
const chuteBtn = document.querySelector('#chute');
const newG = document.querySelector('#reiniciar');
let secretNumber = generateSecretNumber();

title.innerHTML = 'Jogo do número secreto';
paragraph.innerHTML = 'Escolha um número entre 1 e 10';

chuteBtn.addEventListener('click', verifyGuess);

function verifyGuess() {
    let chute = document.querySelector('input').value;
    console.log(chute == secretNumber);
};

function generateSecretNumber() {
    return parseInt(Math.random() * 10 + 1);
};

