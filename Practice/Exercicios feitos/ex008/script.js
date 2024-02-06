// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm

const input = document.querySelector('#box');
const btn = document.querySelector('.btn');
const table = document.querySelector('.table-body');

btn.addEventListener('click', () => {
    const meters = Number(input.value);
    const km = meters / 1000;
    const hm = meters / 100;
    const dam = meters / 10;
    const dm = meters * 10;
    const cm = meters * 100;
    const mm = meters * 1000;

    table.innerHTML += `
        <td>${meters}</td>
        <td>${km}</td>
        <td>${hm}</td>
        <td>${dam}</td>
        <td>${dm}</td>
        <td>${cm}</td>
        <td>${mm}</td>
    `;
    
});