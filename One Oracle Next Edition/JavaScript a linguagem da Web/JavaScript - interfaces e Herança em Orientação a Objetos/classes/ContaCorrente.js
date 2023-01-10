//Arquivo de classe;
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        this._tipo = "corrente";
    }
}
