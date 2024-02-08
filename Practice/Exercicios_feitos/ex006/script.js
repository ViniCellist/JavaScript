// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10

let num = document.querySelector('#box');
let btn = document.querySelector('.btn');
let antbox = document.querySelector('.num1');
let sucbox = document.querySelector('.num2');

btn.addEventListener('click', () => {
    let res = Number(num.value);
    let ant = res - 1;
    let suc = res + 1;

    antbox.innerText = `${ant}`;
    sucbox.innerText = `${suc}`;
});