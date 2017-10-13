class Produtos {

        constructor() {
            this._produtos = [];
        }

        adiciona(produto) {
            this._produtos.push(produto);
        }

        paraArray() {
            return [].concat(this._produtos);
        }
    }