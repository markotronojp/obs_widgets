import { Component } from './component.js';

const config = {
  template: `
    <button class='button'></button>
  `,
};

export class Button extends Component {
  constructor({
    width,
    name,
    onClickListener,
    label,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.setOnClickListener(onClickListener);
    this.setLabel(label);
  }

  setOnClickListener(onClickListener) {
    this.$dom.on('click', onClickListener);
  }

  setLabel(label) {
    this.$dom.text(label);
  }
}

function createInstance(args) {
  return new Button(args);
}

export default {
  createInstance,
};
