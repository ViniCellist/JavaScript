const btn = document.querySelector('#btn');

btn.addEventListener('click', buy);

function buy() {
    let tipo = document.querySelector('#tipo-ingresso');
    let qtd = Number(document.querySelector('#qtd').value);

    if(tipo.value == 'pista') {
        buyPista(qtd);
    } else if (tipo.value == 'superior') {
        buySuperior(qtd);
    }
};

function buyPista(qtd) {
    let qtdPista = Number(document.querySelector('#qtd-pista').textContent);
    if(qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.querySelector('#qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso');
    };
};

function buySuperior(qtd) {
    
}