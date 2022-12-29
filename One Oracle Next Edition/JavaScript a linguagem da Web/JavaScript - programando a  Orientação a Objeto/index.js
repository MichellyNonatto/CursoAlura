class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    #saldo = 0; //Declaração de classe privada;

    depositar(valor) { //Argumentos, fuções ou atributos;
        if (valor > 0) {
            this.#saldo += valor;
            console.log(this.#saldo);
        }
    }

    sacar(valor) {
        if (this.#saldo >= valor && valor > 0) {
            this.#saldo -= valor;
            console.log(this.#saldo);
        }
    }

}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.rg = 12345678910;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(50);

console.log(contaCorrenteRicardo);

console.log(cliente1);