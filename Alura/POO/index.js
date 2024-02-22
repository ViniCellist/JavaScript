import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Fulano", 20000, 12345678900);
diretor.cadastrarSenha("123456")

const gerente = new Gerente("Ciclano", 10000, 12365478900);
gerente.cadastrarSenha("654321")

const cliente = new Cliente("Vinicius", 12365478900, "123")

/*testes*/
const gerenteIsLogged = SistemaAutenticacao.login(gerente, "654321");
const diretorIsLogged = SistemaAutenticacao.login(diretor, "123456");
const clienteIsLogged = SistemaAutenticacao.login(cliente, "123");

/*saida*/
console.log(gerenteIsLogged, diretorIsLogged, clienteIsLogged);

