const btnSort = document.querySelector('#btn-sortear');
const btnReset = document.querySelector('#btn-reiniciar');

btnSort.addEventListener('click', sortear);
btnReset.addEventListener('click', reiniciar);

function sortear() {
    let qntd = document.querySelector('#quantidade').value;
    let de = document.querySelector('#de').value;
    let ate = document.querySelector('#ate').value;

    alert(`Quantidade ${qntd}`)
    alert(`De ${de}`)
    alert(`Ate ${ate}`)
};

function reiniciar() {

};