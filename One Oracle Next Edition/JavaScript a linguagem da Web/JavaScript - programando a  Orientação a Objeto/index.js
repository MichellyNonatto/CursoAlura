class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
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
contaCorrenteRicardo.saldo = 70;
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);



console.log(cliente1, cliente2);