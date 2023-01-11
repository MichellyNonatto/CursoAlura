import { Diretor } from "./classes/Funcionarios/Diretor.js";
import { Gerente } from "./classes/Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./classes/SistemaAutenticacao.js";


const funcionario1 = new Gerente("Eduardo", 21313131, 1212);
funcionario1.cadastraSenha("12345");
const funcionario2 = new Diretor("Felipe", 74545454, 2000);
funcionario2.cadastraSenha("123456789");

const estaLogado = SistemaAutenticacao.login(funcionario2, "123456789");
const estaLogado2 = SistemaAutenticacao.login(funcionario1, "12345");

console.log(estaLogado, estaLogado2);

