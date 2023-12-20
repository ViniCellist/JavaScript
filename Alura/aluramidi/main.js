function Som (seletorAudio) {
   const elemento = document.querySelector(seletorAudio)
   if (elemento != null && elemento.localName === 'audio'){
        elemento.play()
   } else {
        window.alert('Elemento não encontrado ou Seletor inválido!')
   }
}
const ListaDeTeclas = document.querySelectorAll('.tecla')

for (let cont = 0; cont < ListaDeTeclas.length; cont++) {
    const tecla = ListaDeTeclas[cont]
    const instrument = tecla.classList[1]
    const idAudio = `#som_${instrument}`

    tecla.onclick = function () {
        Som(idAudio)
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'NumpadEnter' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}
