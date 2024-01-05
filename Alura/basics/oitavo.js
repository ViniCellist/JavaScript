console.log('Trabalhando com Condicionais')
const listaDeDestinos = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
)
let comprador = 17
let acompanhada = false
let passagem = false
let destino = 'Salvador'
let destinoExiste = false


const podeComprar = comprador >= 18 || acompanhada == true

let contador = 0
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        console.log('Destino Existente')
        destinoExiste = true
        break
    }
    contador += 1
}

console.log('Destino Existe: ', destinoExiste)

if(podeComprar && destinoExiste) {
    console.log('Boa Viagem!!')
} else {
    console.log('ERRO')
}

for(let cont; cont < 3; cont++){
    if(listaDeDestinos[contador] == destino){
        console.log('Destino Existente')
        destinoExiste = true
        break
    }
}