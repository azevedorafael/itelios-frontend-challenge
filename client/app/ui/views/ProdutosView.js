class ProdutosView {

    constructor() {

        // this._elemento = document.querySelector(seletor);
        this._produtos = [];
        let $ = document.querySelector.bind(document);
        this._header = $('header');
        this._main = $('main');
        this._footer = $('footer');

    }

    recebeArrayProdutos(produtos) {
        this._produtos = produtos;
    }

    update(size) {
        this._header.innerHTML = this._headerTemplate();
        this._main.innerHTML = this._mainTemplate(size);
        this._footer.innerHTML = this._footerTemplate();
        var  produtos = new Carousel("produtos");
        produtos.next(2000);
    }

    _headerTemplate() {
        let produtosShort = this._produtos[0].name.split(',');
        this._produtos.shift();
        return `
            Você visitou:
            ${produtosShort[0]}
            e talvez se interesse por:
        `
    }

    _mainTemplate(size) {
         return `
        <div id="produtos">
            <div>
        ${this._produtos.map(produto =>
               `
                    <div class="carousel">
                        <img src="${produto.imageName}">
                    </div>
                `)}
                </div>
        </div>
        `
    }


    _footerTemplate() {
        return `
        <button>adicionar ao carrinho</button>
            `
    }
}