function verify() {
    var pais = window.document.querySelector('input#txtt').value
    var res = window.document.querySelector('div#res')
    
    if(pais === 'Brasil') {
        res.innerHTML = 'Você é brasileiro!'
    } else {
        res.innerHTML = `Estrangeiro`
    }
}