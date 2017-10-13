class ProdutosView {

    constructor() {

        // this._elemento = document.querySelector(seletor);
        alert("functiona");
        this._produtos = [];
    }

    recebeArrayProdutos(produtos) {
        this._produtos = produtos;
    }

    update(size) {
        var main = document.getElementsByTagName("main")[0];
        main.innerHTML = this.template(size);
    }

    template(size) {
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
                    <td>${produto.imageName}</td>
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
}