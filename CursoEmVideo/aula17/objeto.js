let amigo = {nome:'Vinicius', 
    sexo:'M', 
    peso: 70,
    engordar(p){
        console.log('engordou');
        this.peso += p;
    }
};

amigo.engordar(5);
console.log(amigo.peso);

//modularização, RegEx, JSON, AJAX, NodeJS