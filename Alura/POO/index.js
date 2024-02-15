import { Client } from "./Client.js";
import { ChainAccount } from "./Chain.js";

const client1 = new Client();
client1.nome = "Fulano";
client1.cpf = 11122233309;

const client2 = new Client();
client2.nome = "Ciclano";
client2.cpf = 77788899901;

/*clientes*/

const teste1 = new ChainAccount();
teste1.agencia = 1001;
teste1.cliente = client1;
teste1.depositar(500);

const teste2 = new ChainAccount();
teste2.agencia = 1001;
teste2.cliente = client2;
//testes

teste1.transferir(250, teste2);

/**/
console.log(teste2.saldo);