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
        // this._footer.innerHTML = this._footerTemplate();
        var produtos = new Carousel("produtos");
        produtos.next(50000);
        var nprodutos = new Carousel("novosprodutos");
        nprodutos.next();
        nprodutos.next(3000);
    }

    _headerTemplate() {
        let produtosShort = this._produtos[0].name.split(',');
        this._produtos.shift();
        return `
            <h1>Você visitou: <span>${produtosShort[0]}</span>
                 e talvez se interesse por:
            </h1>
        `
    }

    _mainTemplate(size) {
        return `
            <div id="produtos">
            ${this._produtos.map(produto =>
                    `
                        <div class="carousel">
                            <img src="${produto.imageName}"><br>
                            <span>${produto.name}</span><br>
                            <span>${produto.price}</span><br>
                            <span>${produto.productInfo}</span><br>
                            <button>adicionar ao carrinho <i class="material-icons md-18">add_shopping_cart</i></button>
                        </div>
                    `)}
            </div>
            <div id="novosprodutos">
            ${this._produtos.map(produto =>
                    `
                        <div class="carousel">
                            <img src="${produto.imageName}"><br>
                            <span>${produto.name}</span><br>
                            <span>${produto.price}</span><br>
                            <span>${produto.productInfo}</span><br>
                            <button>adicionar ao carrinho <i class="material-icons md-18">add_shopping_cart</i></button>
                        </div>
                    `)}
            </div>
        `
    }


    _footerTemplate() {
        return `
        <button>adicionar ao carrinho</button>
            `
    }
}