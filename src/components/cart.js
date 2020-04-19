import { Component } from './component';

export class Cart extends Component {
    constructor() {
        super();
        this.list = [];
    }

    get template() {
        return `
            <div class="cart">
                <button class="btn btn-primary">
                    Cart (XXX)
                </button>
            </div>
        `;
    }

    addProduct(product) {
        this.list.push(product);
    }
}
