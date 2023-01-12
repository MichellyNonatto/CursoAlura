/*
Ser autenticável significa ter um método "autenticar"

Poliformismo, tratar funções diferentes de maneiras similares.
ducky typing
*/


export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function;
    }
}