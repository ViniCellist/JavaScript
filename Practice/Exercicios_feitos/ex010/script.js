// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.

const widthSize = document.querySelector('#width');
const heightSize = document.querySelector('#height');
const btn = document.querySelector('.btn');
const wallWidth = document.querySelector('.wall-width');
const wallHeight = document.querySelector('.wall-height');
const wallSquare = document.querySelector('.wall-square');
const wallLiters = document.querySelector('.wall-liters');

btn.addEventListener('click', () => {
    const width = Number(widthSize.value);
    const height = Number(heightSize.value);
    const square = width * height;
    const liters = square / 2;

    wallWidth.innerText = `${width}`;
    wallHeight.innerText = `${height}`;
    wallSquare.innerText = `${square}`;
    wallLiters.innerText = `${liters.toFixed(2)}`;
});
