import {Cliente} from "./classes/Cliente.js"
import {ContaCorrente} from "./classes/ContaCorrente.js";

const cliente1 = new Cliente("Ricardo",11122233309,123456789);
const cliente2 = new Cliente("Alice",88822233309,12345678910);

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);
const conta3 = new ContaCorrente(new Cliente("Michelly", 2145464, 487943), 1003);

conta1.depositar(10000);
conta1.sacar(1000);
conta1.transferir(600, conta2);
conta1.transferir(130, conta3);
console.log(conta1, '\n\n', conta2, '\n\n', conta3);

console.log("\n");
if(ContaCorrente.numeroDeContas <= 1){
    console.log(`A Bytebank tem o total de ${ContaCorrente.numeroDeContas} conta funcionando`);
}else {
    console.log(`A Bytebank tem o total de ${ContaCorrente.numeroDeContas} contas funcionando`);
}
console.log("\n");