// Testing for 03-Promise API

import { Cart } from '../../src/components/cart';
import { Product } from '../../src/components/product';

describe('03-Promise API', () => {
    describe('Cart', () => {
        it('adding to cart should based on Promise', done => {
            const c = new Cart();
            const fakeProduct = new Product();
            c.addProduct(fakeProduct).then(size => {
                expect(size).toEqual(1);
                done();
            });
        });

        it('should ignore non-products', done => {
            const c = new Cart();
            const dummyProduct = {};
            c.addProduct(dummyProduct)
                .then(() => {
                    done.fail('adding non-product should failed');
                })
                .catch(size => {
                    expect(size).toEqual(0);
                    done();
                });
        });
    });

    describe('Product', () => {
        it('should have method which can register on click "Add" button', () => {
            const $target = document.createElement('div');
            const p = new Product();
            p.render($target);
            const cb = jest.fn();
            p.onClickAdd(cb);
            p.$el.querySelector('button').click();
            expect(cb).toHaveBeenCalledTimes(1);
        });
    });
});
