//Arquivo de classe;
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    //sobreescrevendo o comportamento do método sacar da classe mãe Conta
    sacar(valor){
        const taxa = 1.1;
        return super._sacar(valor, taxa);
    }
}
