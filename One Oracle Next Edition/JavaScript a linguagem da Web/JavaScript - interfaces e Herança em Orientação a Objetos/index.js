import { Cliente } from "./classes/Cliente.js"
import { ContaPoupanca } from "./classes/ContaPoupanca.js";
import { ContaCorrente } from "./classes/ContaCorrente.js";

const conta1 = new ContaCorrente(0, new Cliente("Ricardo", 11122233309, 123456789), 1001);
const conta2 = new ContaCorrente(10, new Cliente("Alice", 88822233309, 12345678910), 1002);
const conta3 = new ContaPoupanca(new Cliente("Michelly", 2145464, 487943), 1003);

console.log(conta1, conta3);