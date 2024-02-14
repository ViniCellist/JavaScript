class BankAccount {
    titular;
    saldo;
    limite;

    depositar(valor) {
        this.saldo += valor;
    };
};

const client1 = new BankAccount();

client1.titular = "Vinicius";
client1.saldo = 70000;
client1.limite = 100000;


const client2 = new BankAccount();

client2.titular = "Gabriel";
client2.saldo = 85000;
client2.limite = 100000;

client1.depositar(1000);
client2.depositar(5000);

console.log(client1);
console.log(client2);