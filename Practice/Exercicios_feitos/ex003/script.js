// 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.

let inputNome = document.querySelector('#box1');
let inputSalario = document.querySelector('#box2');
let buttonConcluir = document.querySelector('.button-concluded');
let contName = document.querySelector('.name-text');
let contSalary = document.querySelector('.salary-text');
let finalText = document.querySelector('.teste');

buttonConcluir.addEventListener('click', () => {
    let nome = inputNome.value;
    let salario = inputSalario.value;

    contName.innerText = `${nome}`;
    contSalary.innerText = `${salario}`;
    finalText.innerText = `O funcionário ${nome} tem um salário de R$${salario} em Janeiro`;
});