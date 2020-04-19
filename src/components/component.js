export class Component {
    get template() {
        return '<p>test</p>';
    }

    static parse(template) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(template, 'text/html');
        return doc.body.firstElementChild;
    }

    render($target) {
        const $el = Component.parse(this.template);
        $target.append($el);
        this.$el = $el;
    }
}
