// 2) Faça um programa que leia o nome de uma pessoa e mostre uma       mensagem de boas vindas para ela:
// Ex:
// Qual é o seu nome? João da Silva
// Olá João da Silva, é um prazer te conhecer!

const input = document.querySelector('.teste');
const btn = document.querySelector('.button');
const message = document.querySelector('.resp-container');

btn.addEventListener('click', () => {
    const resposta = input.value;
    message.innerHTML = `Olá ${resposta}, é um prazer te conhecer!`;
});