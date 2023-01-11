//Classe abstrata, é usada unicamente para ser herdada por outra classe.

export class Conta {
    static numeroDeContas = 0;
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instaciar um objeto do tipo 'Conta' diretamente, pois é uma classe abstrata!");
        } else {

            this._saldo = saldoInicial;
            this._cliente = cliente;
            this._agencia = agencia;

            Conta.numeroDeContas += 1;
        }
    }

    depositar(valor) { //Argumentos, fuções ou atributos;
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        } else return 0;
    }

    sacar(valor){ //método abstrato, ele serve somente para ser sobeescrito.
        throw new Error("O método sacar da Conta é abstrato. Insira um novo método sacar na instância desejada para que ele seja sobeescrito")
    }

    _sacar(valor, taxa) {
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