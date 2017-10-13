class Produto {

        constructor(_businessId, _name, _imageName, _price, _oldPrice, _productInfo) {

            Object.assign(this, { _businessId, _name, _imageName, _price, _oldPrice, _productInfo});
            Object.freeze(this);
        }

        get businessId() {
            return this._businessId;
        }

        get name() {

            return this._name;
        }

        get imageName() {

            return this._imageName;
        }

        get price() {

            return this._price;
        }

        get oldPrice() {
            return this._oldPrice;
        }

        get productInfo() {
            return this._productInfo;
        }
    }
