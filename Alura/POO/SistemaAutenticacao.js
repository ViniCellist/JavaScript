export class SistemaAutenticacao {
    static login(auth, senha) {
        if(SistemaAutenticacao.isAuth(auth)){
            return auth.autenticar(senha);
        }
        return false;
    };

    static isAuth(auth){
        return "autenticar" in auth &&
         auth.autenticar instanceof Function;
    };
};