// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5

let boxUm = document.querySelector('.notaum');
let boxDois = document.querySelector('.notadois');
let btn = document.querySelector('.btn');

let resultUm = document.querySelector('.result1');
let resultDois = document.querySelector('.result2');
let mediaResult = document.querySelector('.media');

btn.addEventListener('click', () => {
    let nota1 = Number(boxUm.value);
    let nota2 = Number(boxDois.value);
    let media = (nota1 + nota2) / 3;

    resultUm.innerText = `${nota1}`;
    resultDois.innerText = `${nota2}`;
    mediaResult.innerText = `${media.toFixed(1)}`;
});