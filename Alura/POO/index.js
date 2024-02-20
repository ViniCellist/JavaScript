import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Fulano", 11122233309);
const contaC = new Conta(0, cliente1, 1001, "Corrente");
const contaP = new Conta(50, cliente1, 1001, "Poupança");

console.log(contaC);
console.log(contaP);

