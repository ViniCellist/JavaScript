const btnAdd = document.querySelector('.botao-adicionar');
const btnClean = document.querySelector('.botao-limpar');
let totalAll = 0;

btnAdd.addEventListener('click', adicionar);
btnClean.addEventListener('click', limpar);


function adicionar() {
    let product = document.querySelector('#produto').value;
    let productName = product.split('-')[0];
    let valueUnique = parseInt(product.split('R$')[1]);
    let qntd = document.querySelector('#quantidade').value;
    let price = qntd * valueUnique;

    let carrinho = document.querySelector('#lista-produtos');
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${qntd}x</span> ${productName} <span class="texto-azul">R$${price}</span>
        </section>
    `;

    totalAll = totalAll + price;

    let totalShow = document.querySelector('#valor-total');
    totalShow.innerText = `R$${totalAll}`;

    document.querySelector('#quantidade').value = 0;
};

function limpar() {
    totalAll = 0;
    document.querySelector('#lista-produtos').innerHTML = '';
    document.querySelector('#valor-total').textContent = 'R$ 0';
}
