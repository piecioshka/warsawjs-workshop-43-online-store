export class Component {
    get template() {
        return '<p>test</p>';
    }

    constructor() {
        this.model = null;
    }

    static parse(template) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        return doc.body.firstElementChild;
    }

    update() {
        const $el = Component.parse(this.template);
        if (this.$el) {
            this.$el.parentNode.replaceChild($el, this.$el);
            this.$el = $el;
        }
    }

    render($target) {
        const $el = Component.parse(this.template);
        $target.append($el);
        this.$el = $el;
    }
}
