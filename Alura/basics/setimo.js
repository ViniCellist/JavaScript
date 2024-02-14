console.log('Trabalhando com Condicionais');
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);
let comprador = 17;
let acompanhada = false;

if (comprador >= 18) {
    console.log('Destinos Possiveis:');
    console.log(listaDeDestinos);
} else {
    if (acompanhada) {
        console.log('Destinos Possiveis:');
        console.log(listaDeDestinos);
    } else {
        console.log('Você é menor de idade e não está acompanhado(a)!');
    };
};
