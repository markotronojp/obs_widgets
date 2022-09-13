import { Component } from './component.js';

const config = {
  template: `
    <div class='content'></div>
  `,
  initial: {
    fontSize: '1rem',
    color: '#000',
  },
};

export class Content extends Component {
  constructor({
    width,
    name,
    content,
    fontSize = config.initial.fontSize,
    color = config.initial.color,
  }) {
    super({ width, name, $dom: $(config.template) });

    this.setContent(content);
    this.setFontSize(fontSize);
    this.setColor(color);
  }

  setContent(content) {
    if (!this.isJQuery()) return;
    this.content = content;
    this.empty();
    this.$dom.text(content);
  }

  getContent() {
    return this.content;
  }

  setFontSize(fontSize) {
    if (!this.isJQuery()) return;
    this.$dom.css('font-size', fontSize);
  }

  setColor(color) {
    if (!this.isJQuery()) return;
    this.$dom.css('color', color);
  }
}

function createInstance(args) {
  return new Content(args);
}

export default {
  createInstance,
};
