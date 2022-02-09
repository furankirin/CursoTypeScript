class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($("#negociacaoView"));
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView = new MensagemView($("#mensagemView"));

    }
    adiciona(event) {
        event.preventDefault();

        let data = DataHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value

        )

        debugger;
        this._listaNegociacoes.adicionaNegociacoes(negociacao);
        this._negociacaoView.update(this._listaNegociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso")
        this._limpaFormulario();


        console.log(this._listaNegociacoes.negociacoes);

       


    }
    _limpaFormulario(){
        this._inputData.value = ""
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus();
    }
}