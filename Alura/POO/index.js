import { Client } from "./Client.js";
import { ChainAccount } from "./Chain.js";

const client1 = new Client("Fulano", 11122233309);
const teste1 = new ChainAccount(1001, client1);

const client2 = new Client("Ciclano", 77788899901);
const teste2 = new ChainAccount(1001, client2);

console.log(ChainAccount.numContas);