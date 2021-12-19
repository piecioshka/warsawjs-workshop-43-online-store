import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'node-snackbar/dist/snackbar.css';
import Snackbar from 'node-snackbar';

import { Cart } from './components/cart';
import { Product } from './components/product';
import { instance as ProductsService } from './services/products-service';

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
            Snackbar.show({
                text: `Product "${p.model.name}" was add to cart`,
            });
        } catch (err) {
            Snackbar.show({
                text: `Product "${p.model.name}" cannot be added to cart`,
                actionTextColor: '#ff0000',
            });
        }
    });
}

async function renderProductList(cart) {
    // const products = Array.from({ length: 3 });
    // const products = FIXTURE_PRODUCTS;
    const products = await ProductsService.fetchProducts();
    products.forEach(product => {
        renderProduct(cart, product);
    });
}

function main() {
    const cart = renderCart();
    renderProductList(cart);
}

main();
