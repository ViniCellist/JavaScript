// 1) Escreva um programa que mostre na tela a mensagem "Olá, Mundo!"
const container = document.querySelector('.teste-container');
const btn = document.querySelector('.teste');

btn.addEventListener('click', () => {
    container.innerHTML = "<h1>Olá Mundo!</h1>"
})