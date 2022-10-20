export class Component {
  constructor({
    $dom,
    width,
    name,
  }) {
    this.setDom($dom);
    this.setWidth(width);
    this.setName(name);
  }

  setDom($dom) {
    this.$dom = $dom;
  }

  getDom() {
    return this.$dom;
  }

  setWidth(width) {
    if (!this.isJQuery()) return;
    this.$dom.css('width', width);
  }

  show() {
    if (!this.isJQuery()) return;
    this.$dom.show();
  }

  hide() {
    if (!this.isJQuery()) return;
    this.$dom.show();
  }

  append($container) {
    if (!this.isJQuery()) return;
    this.$dom.append($container);
  }

  empty() {
    if (!this.isJQuery()) return;
    this.$dom.empty();
  }

  setName(name) {
    if (!this.isJQuery()) return;
    this.$dom.addClass(name);
  }

  isJQuery() {
    return this.$dom instanceof jQuery;
  }
}

export default {

};
