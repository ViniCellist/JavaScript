const btnAdd = document.querySelector('.primary');
const btnSort = document.querySelector('.secondary');
const btnReset = document.querySelector('.form__link');
let amigos = [];


btnAdd.addEventListener('click', adicionar);
btnSort.addEventListener('click', sortear);
btnReset.addEventListener('click', reiniciar);

function adicionar() {
    let amigo = document.querySelector('#nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo');
        return;
    };

    if (amigos.includes(amigo.value)) {
        alert('Nome já informado!!');
        return;
    }
    let lista = document.querySelector('#lista-amigos');
    amigos.push(amigo.value);

    if (lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    };
    amigo.value = '';

}

function sortear() {
    if (amigos.length < 4) {
        alert('adiciona pelo menos 4 amigos');
        return;
    };
    embaralha(amigos);
    let sorteio = document.querySelector('#lista-sorteio');

    for(let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
        
    }
}

function reiniciar() {
    amigos = [];
    document.querySelector('#lista-amigos').innerHTML = '';
    document.querySelector('#lista-sorteio').innerHTML = '';
}

function embaralha(amigos) {
    for(let i = amigos.length; i < amigos.length; i--) {
        const iRandom = Math.floor(Math.random() * i);

        [amigos[i - 1], amigos[iRandom]] = [amigos[iRandom], amigos[i - 1]];
    };
};