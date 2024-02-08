// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu
// PREÇO PROMOCIONAL, com 5% de desconto.

const input = document.querySelector('#box');
const btn = document.querySelector('.btn');
const res = document.querySelector('.desconto');

btn.addEventListener('click', () => {
    let price = Number(input.value);

    if(!isNaN(price)) {
        let discount = price - ((price / 100) * 5);
        res.innerText = `Preço com desconto R$${discount.toFixed(2)}!`;
    } else {
        res.innerText = 'Digite um valor numérico válido!'
    };
});
