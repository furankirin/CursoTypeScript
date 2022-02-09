class ListaNegociacoes{

    constructor(){

        this._negociacoes = []
    }

    adicionaNegociacoes(negociacao){

        this._negociacoes.push(negociacao)
    }

    get negociacoes(){

        return this._negociacoes;
    }



}