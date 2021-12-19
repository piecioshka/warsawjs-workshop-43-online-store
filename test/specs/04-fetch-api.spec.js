// Testing for 04-Fetch API

import 'isomorphic-fetch';
import { ProductsService } from '../../src/services/products-service';
import FIXTURE_PRODUCTS from '../fixtuers/products.fixture.json';

describe('04-Fetch API', () => {
    describe('ProductsService', () => {
        it('should fetch products', done => {
            const ps = new ProductsService();
            jest.spyOn(window, 'fetch').mockReturnValue(
                Promise.resolve(new Response(JSON.stringify(FIXTURE_PRODUCTS))),
            );
            ps.fetchProducts().then(products => {
                expect(products.length).toBeGreaterThan(0);
                done();
            });
        });
    });
});
