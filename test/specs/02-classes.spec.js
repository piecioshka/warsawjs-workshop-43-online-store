// Testing for 02-Classes

import { Component } from '../../src/components/component';
import { Product } from '../../src/components/product';
import { Cart } from '../../src/components/cart';

describe('02-Classes', () => {
    describe('Component', () => {
        it('can be rendered', () => {
            const $target = document.createElement('div');
            const c = new Component();
            c.render($target);
            expect($target.children.length).toEqual(1);
        });

        it('can have option to overwrite template', () => {
            class CustomComponent extends Component {
                get template() {
                    return '<hr/>';
                }
            }
            const $target = document.createElement('div');
            const c = new CustomComponent();
            c.render($target);
            expect(
                $target.firstElementChild.tagName.toLocaleLowerCase(),
            ).toEqual('hr');
        });

        it('has static method which convert HTML to DOM', () => {
            const html = '<div>hello world</div>';
            const $target = Component.parse(html);
            expect($target).toEqual(jasmine.any(HTMLDivElement));
        });
    });

    describe('Product', () => {
        it('should have a "product" class', () => {
            const $target = document.createElement('div');
            const c = new Product();
            c.render($target);
            expect(
                $target.firstElementChild.classList.contains('product'),
            ).toBeTruthy();
        });
    });

    describe('Cart', () => {
        it('should have a "cart" class', () => {
            const $target = document.createElement('div');
            const c = new Cart();
            c.render($target);
            expect(
                $target.firstElementChild.classList.contains('cart'),
            ).toBeTruthy();
        });

        it('can add product', () => {
            const c = new Cart();
            const p = new Product();
            c.addProduct(p);
            expect(c.list.length).toEqual(1);
        });
    });
});
