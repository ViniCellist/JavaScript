import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Fulano", 11122233309);
const teste1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Ciclano", 77788899901);
const teste2 = new ContaCorrente(1001, cliente2);

console.log(ChainAccount.numContas);