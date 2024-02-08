// 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.

const ladoA = document.querySelector('#ladoA');
const ladoB = document.querySelector('#ladoB');
const ladoC = document.querySelector('#ladoC');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

btn.addEventListener('click', () => {
    let a = Number(ladoA.value);
    let b = Number(ladoB.value);
    let c = Number(ladoC.value);

    if(a !== 0 && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
        let delta = b * b - 4 * a * c;
        res.innerText = `O valor de Delta será ${delta}!`;
    } else {
        res.innerText = 'Por favor, insira valores válidos para Lado A, B e C...certificando que A não seja 0!'
    };
});


