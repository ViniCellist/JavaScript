const btn = document.querySelector('#btn');

btn.addEventListener('click', buy);

function buy() {
    let tipo = document.querySelector('#tipo-ingresso');
    let qtd = Number(document.querySelector('#qtd').value);

    if(tipo.value == 'pista') {
        buyPista(qtd);
    } else if (tipo.value == 'superior') {
        buySuperior(qtd);
    } else {
        buyInferior(qtd);
    };
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
    let qtdSuperior = Number(document.querySelector('#qtd-superior').textContent);
    if(qtd > qtdSuperior) {
        alert('Quantidade indisponível para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.querySelector('#qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso');
    };
};

function buyInferior(qtd) {
    let qtdInferior = Number(document.querySelector('#qtd-inferior').textContent);
    if(qtd > qtdInferior) {
        alert('Quantidade indisponível para tipo inferior');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.querySelector('#qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso');
    };
};