class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    

    verificarMaiorIdade() {
        if (this.idade >= 18) {
            return true;
        } else {
            return false;
        };
    };

    cumprimentar() {
        console.log(`Saudações ${this.nome}`)
    };
};


const pessoa = new Pessoa("Vinícius", 25);
console.log(pessoa.verificarMaiorIdade());
pessoa.cumprimentar();
