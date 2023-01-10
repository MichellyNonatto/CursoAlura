export class Conta {
    _tipo;
    static numeroDeContas = 0;
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
        Conta.numeroDeContas += 1;
    }

    depositar(valor) { //Argumentos, fuções ou atributos;
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        } else return 0;
    }

    sacar(valor) {
        let taxa = 1;
        
        if(this._tipo == "corrente"){
            taxa =  1.1;
        }

        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado && valorSacado > 0) {
            this._saldo -= valorSacado;
            return valorSacado;
        } else return 0;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}