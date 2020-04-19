import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'node-snackbar/dist/snackbar.css';
import Snackbar from 'node-snackbar';

import { Cart } from './components/cart';
import { Product } from './components/product';
import DUMMY_PRODUCTS from '../test/dummies/products.dummy.json';

function renderCart() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);
    return c;
}

function renderProduct(cart, product) {
    const $products = document.querySelector('.products');
    const p = new Product();
    p.model = product;
    p.render($products);
    p.onClickAdd(async () => {
        try {
            await cart.addProduct(p);
            Snackbar.show({ text: 'product was add to cart' });
        } catch (err) {
            Snackbar.show({ text: 'product cannot be added to cart' });
        }
    });
}

function renderProductList(cart) {
    // const products = Array.from({ length: 3 });
    const products = DUMMY_PRODUCTS;
    products.forEach(product => {
        renderProduct(cart, product);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart);
}

main();
