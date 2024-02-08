// 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.

let numUm = document.querySelector('#numUm');
let numDois = document.querySelector('#numDois');
let btnSomar = document.querySelector('.somar');
let result = document.querySelector('.result');


btnSomar.addEventListener('click', () => {
    
    let soma1 = Number.parseInt(numUm.value);
    let soma2 = Number.parseInt(numDois.value);
    let numTres = soma1 + soma2;
    result.innerText = `${numTres}`;
});

