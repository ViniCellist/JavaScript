class Pessoa {
    nome;
    idade;

    aniversario() {
        this.idade += 1
    };
};

const teste1 = new Pessoa();
teste1.nome = "Vinicius";
teste1.idade = 25;

const teste2 = new Pessoa();
teste2.nome = "Gabriel";
teste2.idade = 19;

/*teste*/
teste2.aniversario();


console.log(teste2);

