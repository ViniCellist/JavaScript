function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${min}`;

    if (hora >= 0 && hora < 6) {
        //Boa madrugada!
        img.src = 'noite.png';
        document.body.style.background = '#cc8383';
    } else if (hora >= 6 && hora < 12) {
        //Bom dia
        img.src = 'manha.png';
        document.body.style.background = '#dbc092';
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'tarde.png';
        document.body.style.background = '#3a84de';
    } else {
        //Boa noite
        img.src = 'noite.png';
        document.body.style.background = '#825e65';
    };
};
