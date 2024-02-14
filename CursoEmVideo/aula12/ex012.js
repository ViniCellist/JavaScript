var agora = new Date();
var min = agora.getMinutes();
var hora = agora.getHours();
console.log(`Agora são exatamente ${hora}:${min}!`);
if (hora < 12) {
    console.log('Bom dia!');
} else if (hora <= 18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite!');
};