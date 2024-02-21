import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Fulano", 11122233309);
const contaC = new ContaCorrente(1001, cliente1);
const contaP = new ContaPoupanca(1000, 1001, cliente1);
const contaS = new ContaSalario(cliente1);


/*testes*/
contaS.depositar(100);
contaS.sacar(10);



/*saida*/

console.error(contaS);


