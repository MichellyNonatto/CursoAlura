class Cliente {
    nome;
    cpf;
    rg;
}

class ContaCorrente {
    agencia;
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

const valorDepositado = contaCorrenteRicardo.depositar(50);
const valorSacado = contaCorrenteRicardo.sacar(-50);

pulaLinha();
console.log("Valor depoisitado:",valorDepositado);
console.log("Valor sacado:",valorSacado);
console.log(contaCorrenteRicardo);
console.log(cliente1);
pulaLinha();

function pulaLinha(){
    console.log('\n');
}