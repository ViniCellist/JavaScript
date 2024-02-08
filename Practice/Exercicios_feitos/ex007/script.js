// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666

let num = document.querySelector('#box');
let btn = document.querySelector('.btn');
let doubleBox = document.querySelector('.double');
let thirdBox = document.querySelector('.third');

btn.addEventListener('click', () => {
    let specialNum = Number(num.value);
    let double = specialNum * 2;
    let third = specialNum / 3;

    doubleBox.innerText = `${double}`;
    thirdBox.innerText = `${third.toFixed(1)}`;
});