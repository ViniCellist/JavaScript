function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançaM.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'jovemM.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultM.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoM.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'criançaF.png')
            } else if (idade < 21) {
                //adolescente
                img.setAttribute('src', 'jovemF.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultF.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}