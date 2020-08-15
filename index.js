import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Raphael", 49022254608, 57200);
diretor.cadastrarSenha("hehe2233");

const gerente = new Gerente("Luna", 13645674128, 20000);
gerente.cadastrarSenha("lulu2525");

const cliente = new Cliente("Bruno", 252147369, 1500);
cliente.cadastrarSenha("258147");

const loginDiretor = SistemaAutenticacao.login(diretor, "hehe2233");
const loginGerente = SistemaAutenticacao.login(gerente, "lulu2525");
const loginCliente = SistemaAutenticacao.login(cliente, "258147");

console.log(diretor, loginDiretor);
console.log(gerente, loginGerente);
console.log(cliente, loginCliente);