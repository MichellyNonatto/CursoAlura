import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
    }

    sacar(valor){
        let taxa = 1.02;
        return super._sacar(valor, taxa);
    }
}
