// Testing for 05-Regexp

import { Cart } from '../../src/components/cart';
import { Product } from '../../src/components/product';

describe('05-Regexp', () => {
    describe('Product', () => {
        it('should display correct image', () => {
            const $target = document.createElement('div');
            const c = new Product();
            c.model = {
                imageUrl: 'http://example.org',
            };
            c.render($target);
            expect(
                $target.querySelector('.product-image').getAttribute('src'),
            ).toMatch(/example/);
        });
    });

    describe('Cart', () => {
        it('should refresh number of cart size', done => {
            const $target = document.createElement('div');
            const c = new Cart();
            c.render($target);
            c.addProduct(new Product()).then(() => {
                const content = c.$el
                    .querySelector('button')
                    .textContent.trim();
                expect(content).toMatch(/\(1\)/);
                done();
            });
        });
    });
});
