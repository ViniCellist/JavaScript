// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$4,96 (06/02/2024).

const input = document.querySelector('#box');
const btn = document.querySelector('.btn');
const real = document.querySelector('.real');
const dolar = document.querySelector('.dolar');

btn.addEventListener('click', () => {
    const valor = Number(input.value);
    const converter = valor / 4.96;

    real.innerText = `${valor}`;
    dolar.innerText = `${converter.toFixed(2)}`;
});