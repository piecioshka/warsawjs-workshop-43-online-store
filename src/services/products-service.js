import { productsUrl } from '../config';

class ProductsService {
    fetchProducts() {
        return window.fetch(productsUrl).then(response => {
            return response.json();
        });
    }
}

const instance = new ProductsService();

export { ProductsService, instance };
