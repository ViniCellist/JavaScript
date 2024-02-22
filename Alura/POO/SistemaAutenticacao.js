export class SistemaAutenticacao {
    static login(auth, senha) {
        return auth.autenticar(senha);
    };
};