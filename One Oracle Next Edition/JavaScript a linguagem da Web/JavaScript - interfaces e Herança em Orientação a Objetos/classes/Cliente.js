//Arquivo de classe

export class Cliente {
    get cpf(){
        this._cpf;
        return this._cpf;
    }

    get rg(){
        this._rg;
        return this._rg;
    }

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }
}