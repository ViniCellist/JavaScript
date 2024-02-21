import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Fulano", 11122233309);
const contaC = new ContaCorrente(1001, cliente1);
const contaP = new ContaPoupanca(1000, 1001, cliente1);



/*testes*/

console.error(contaC, contaP);


