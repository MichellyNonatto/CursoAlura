import {Cliente} from "./classes/Cliente.js"
import {ContaCorrente} from "./classes/ContaCorrente.js";

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.rg = 12345678910;

const conta1 = new ContaCorrente();
conta1.agencia = 1001;
conta1.cliente = cliente1;

const valorDepositado = conta1.depositar(500);
const valorSacado = conta1.sacar(5);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1002;

conta1.transferir(100, conta2);
console.log(conta1, conta2);