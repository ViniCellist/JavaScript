// o comando window.prompt() devolve o valor como 'string'
// o '+' tambem pode ser lido como concatenação
// Number.parseInt() converte para tipo inteiro
// String(n) ou n.toString() converte para 'string'
var n1 = Number.parseInt(window.prompt("Digite o primeiro numero"));
var n2 = Number.parseInt(window.prompt("Digite o segundo numero"));
var s = n1 + n2;
window.alert(`A soma dos valores é ${s}`);