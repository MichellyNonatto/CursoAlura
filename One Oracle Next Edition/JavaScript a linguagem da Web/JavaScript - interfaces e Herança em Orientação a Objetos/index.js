import { Cliente } from "./classes/Cliente.js";
import { Diretor } from "./classes/Funcionarios/Diretor.js";
import { Gerente } from "./classes/Funcionarios/Gerente.js";
import { SistemaAutenticacao } from "./classes/SistemaAutenticacao.js";
import {ContaCorrente} from "./classes/Conta/ContaCorrente.js";
import {ContaPoupanca} from "./classes/Conta/ContaPoupanca.js";
import {ContaSalario} from "./classes/Conta/ContaSalario.js";
import { Conta } from "./classes/Conta/Conta.js";


const diretor = new Diretor("Felipe", 74545454, 2000);
diretor.cadastraSenha("123456789");
const gerente = new Gerente("Eduardo", 21313131, 1212);
gerente.cadastraSenha("12345");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "12345");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");

console.log("\nFuncionários cadastrados\n");
console.log(gerenteEstaLogado, gerente, diretor, diretorEstaLogado);

const conta1 = new ContaCorrente(200, new Cliente("Ricardo", 11122233309, 123), 1001);
const conta2 = new ContaCorrente(10, new Cliente("Alice", 88822233309, 123), 1002);
const conta3 = new ContaPoupanca(new Cliente("Michelly", 2145464,  123), 1003);
const conta4 = new ContaSalario(new Cliente("Paola", 65664687,  123),1004);

const conta1Logada = SistemaAutenticacao.login(conta1, 123);
const conta2Logada = SistemaAutenticacao.login(conta2, 123);
const conta3Logada = SistemaAutenticacao.login(conta3, 123);
const conta4Logada = SistemaAutenticacao.login(conta4, 123);

console.log("\nClientes cadastrados\n");
console.log(conta1Logada,conta1, conta2Logada, conta2, conta3Logada, conta3, conta4Logada, conta4);


console.log(`\nO byteBanck tem o total de ${Conta.numeroDeContas} contas cadastrados`);