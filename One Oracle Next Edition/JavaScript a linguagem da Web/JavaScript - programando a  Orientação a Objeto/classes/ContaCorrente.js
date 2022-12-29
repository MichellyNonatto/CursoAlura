//Arquivo de classe;

export class ContaCorrente {
    agencia;
    cliente;


    //#saldo = 0; //Declaração de classe privada;
    _saldo = 0;

    depositar(valor) { //Argumentos, fuções ou atributos;
        if (valor > 0) {
            this._saldo += valor;
             return valor;
        }else return 0;
    }

    sacar(valor) {
        if (this._saldo >= valor && valor > 0) {
            this._saldo -= valor;
            return valor;
        }else return 0;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}