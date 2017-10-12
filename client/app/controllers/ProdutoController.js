class ProdutoController {

    constructor() {

        let $ = document.querySelector.bind(document);
  
    }

    adiciona(event) {
        // cancela a submissão do formulário
        event.preventDefault();

        // let data = new Date(this._inputData.value.split('-'));
        //mesma soluçõa usando spread operator
        // let data = converter.paraData(this._inputData.value);
        // console.log(this._inputData.value);

        this._negociacoes.adiciona(this._criaNegociacao());
        this._negociacoesView.update(this._negociacoes);

        //Limpando o formulário após criação da nova negociação
        this._limpaFormulario();

        // imprime a lista com o novo elemento
        console.log(this._negociacoes.paraArray());
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0
        this._inputData.focus();
    }

    _criaNegociacao() {
        // retorna uma instância de negociação
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}