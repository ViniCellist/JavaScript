let sortedNumbers = [];
let limitNumber = 10;

const title = document.querySelector('h1');
const paragraph = document.querySelector('.texto__paragrafo');
const tip = document.querySelector('.texto__msg');
const chuteBtn = document.querySelector('#chute');
let secretNumber = generateSecretNumber();

title.innerHTML = 'Jogo do número secreto';
paragraph.innerHTML = 'Escolha um número entre 1 e 10';

chuteBtn.addEventListener('click', verifyGuess);

function verifyGuess() {
    let chute = document.querySelector('input').value;
    if (chute == secretNumber) {
        paragraph.innerText = "";
        tip.innerText = "ACERTOU!!";
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else if (chute > secretNumber) {
        tip.innerText = `O número secreto é menor que ${chute}!`;
        clearField();
    } else {
        tip.innerText = `O número secreto é maior que ${chute}!`;
        clearField();
    };
};

function generateSecretNumber() {
    let choosenNumber = parseInt(Math.random() * limitNumber + 1);
    let quantity = sortedNumbers.length;

    if (quantity == limitNumber) {
        sortedNumbers = [];
    }

    if (sortedNumbers.includes(choosenNumber)) {
        return generateSecretNumber();
    } else {
        sortedNumbers.push(choosenNumber);
        return choosenNumber;
    };
};

function clearField() {
    chute = document.querySelector('input');
    chute.value = '';
};