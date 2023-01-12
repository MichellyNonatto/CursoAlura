import { Cliente } from "./classes/Cliente.js";
import { Diretor } from "./classes/Funcionarios/Diretor.js";
import { Gerente } from "./classes/Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./classes/SistemaAutenticacao.js";

const diretor = new Diretor("Felipe", 74545454, 2000);
diretor.cadastraSenha("123456789");
const gerente = new Gerente("Eduardo", 21313131, 1212);
gerente.cadastraSenha("12345");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

//console.log(gerenteEstaLogado, diretorEstaLogado);

const cliente1 = new Cliente("Maria", 54564646, "1234");
const cliente1Logado = SistemaAutenticacao.login(cliente1, "1234");

console.log(cliente1Logado);