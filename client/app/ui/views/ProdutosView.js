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
        var h
        // var main = document.getElementsByTagName("main")[0];
        this._header.innerHTML = this._headerTemplate();
        this._main.innerHTML = this._mainTemplate(size);
        this._footer.innerHTML = this._footerTemplate();
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
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Business ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Old Price</th>
                    <th>Image Name</th>
                    <th>Product Info</th>
                </tr>
            </thead>

            <tbody>
            ${this._produtos.map(produto =>
                `
                <tr>
                    <td>${produto.businessId}</td>
                    <td>${produto.name}</td>
                    <td>${produto.price}</td>
                    <td>${produto.oldPrice}</td>
                    <td><img src="${produto.imageName}" alt=""></td>
                    <td>${produto.productInfo}</td>
                </tr>
                `).join('')}
            </tbody>

            <tfoot>
                <tr>
                    <td colspan="3"></td>
                </tr>
            </tfoot>
        </table>
        `
    }

    _footerTemplate() {
        return `
        <button>adicionar ao carrinho</button>
            `
    }
}