import { Component } from './component';
import { Product } from './product';

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
        return new Promise((resolve, reject) => {
            if (product instanceof Product) {
                this.list.push(product);
                resolve(this.list.length);
            } else {
                reject(this.list.length);
            }
        });
    }
}
