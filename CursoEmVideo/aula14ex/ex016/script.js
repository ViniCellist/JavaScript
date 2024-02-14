function contar() {
    var inicio = document.getElementById('txti');
    var fim = document.getElementById('txtf');
    var passo = document.getElementById('txtp');
    var res = document.getElementById('res');
    var emo = '👉';

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar!';
    } else {
        res.innerHTML = 'Contando: <br>';
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        };

        if (i < f) {
            for(var c = i; c <= f; c+= p) {
                res.innerHTML += ` ${c} ${emo}`;
            };
        } else {
            for(var c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} ${emo}`;
            };
        };
    };
};