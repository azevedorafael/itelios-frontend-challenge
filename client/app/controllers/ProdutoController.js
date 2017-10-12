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

    // Estados do AJAX Request:
    // 0:	requisição	ainda	não	iniciada;
    // 1:	conexão	com	o	servidor	estabelecida;
    // 2:	requisição	recebida;
    // 3:	processando	requisição;
    // 4:	requisição	está	concluída	e	a	resposta	está	pronta.
    importaProdutos() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'products.json', 'true');
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('Obtendo os produtos do servidor.');

                    //realizando o parse para Objeto
                    var produtos = JSON.parse(xhr.responseText);
                    console.log(JSON.parse(xhr.responseText));
                    var node = document.createElement("h2");
                    var textnode = document.createTextNode("Water");
                    node.appendChild(textnode);
                    document.querySelector('body').appendChild(node);
                }
                else {
                    console.log(xhr.responseText);
                    this._mensagem.texto = 'Não	foi	possível obter os Produtos da	semana';
                }
            }
        };
        xhr.send();	//	executa	a	requisição	configurada
        console.log(xhr.responseText);
    }
}

