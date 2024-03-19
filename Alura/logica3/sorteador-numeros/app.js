const btnSort = document.querySelector('#btn-sortear');
const btnReset = document.querySelector('#btn-reiniciar');
const resultado = document.querySelector('#resultado');

btnSort.addEventListener('click', sortear);
btnReset.addEventListener('click', reiniciar);

function sortear() {
    let qntd = parseInt(document.querySelector('#quantidade').value);
    let de = parseInt(document.querySelector('#de').value);
    let ate = parseInt(document.querySelector('#ate').value);

    let sorteados = [];
    let numero;

    if (qntd >= 0 || de >= 0 || ate >= 0) {
        for(let i = 0; i < qntd; i++) {
            numero = ObterNumeroAleatorio(de, ate);
            while(sorteados.includes(numero)) {
                numero = ObterNumeroAleatorio(de, ate);
            };
            sorteados.push(numero);
        };
    
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    
        alterarStatusBotao();
    } else {
        alert('Preencha os campos com valores validos!');
    };

};

function reiniciar() {
    document.querySelector('#quantidade').value = '';
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';
    document.querySelector('#resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
};

function ObterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function alterarStatusBotao() {
    if(btnReset.classList.contains('container__botao-desabilitado')) {
        btnReset.classList.remove('container__botao-desabilitado');
        btnReset.classList.add('container__botao');
    } else {
        btnReset.classList.remove('container__botao');
        btnReset.classList.add('container__botao-desabilitado');
    }
}