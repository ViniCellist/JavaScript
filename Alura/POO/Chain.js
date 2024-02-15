import { Client } from "./Client.js";

export class ChainAccount {
    agencia;
    _cliente;

    set cliente(novoValor) {
        if(novoValor instanceof Client) {
            this._cliente = novoValor;
        };
    };

    get cliente() {
        return this._cliente;
    };

    /*privado*/ 
    _saldo = 0;

    get saldo() {
        return this._saldo;
    };

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        };
    };

    depositar(valor) {
        if(valor <= 0) {
            return
        }
            this._saldo += valor;
    };

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
};