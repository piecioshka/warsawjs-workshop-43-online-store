import { Component } from './component';

export class Product extends Component {
    get template() {
        this.model = this.model || {};
        return `
            <div class="product card mb-3 text-center">
                <img class="product-image" src="${this.model.imageUrl}" />
                <div class="card-body">
                    <h5 class="card-title mb-0">${this.model.name}</h5>
                </div>
                <div class="card-footer">
                    <button class="btn btn-small btn-success">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }

    onClickAdd(cb) {
        this.$el.querySelector('button').addEventListener('click', cb);
    }
}
