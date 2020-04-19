import './index.html';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Cart } from './components/cart';
import { Product } from './components/product';

function main() {
    const $toolbar = document.querySelector('.toolbar');
    const c = new Cart();
    c.render($toolbar);

    const $products = document.querySelector('.products');
    const p = new Product();
    p.render($products);
}

main();
