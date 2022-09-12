import { Component } from './component.js';

const config = {
  template: `
    <input class='input'>
  `,
  default: {
    type: 'text',
  },
};

export class Input extends Component {
  constructor({
    width,
    name,
    type,
    placeholder,
    val,
    onInputListener,
    onChangeListener,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.setType(type);
    this.setPlaceholder(placeholder);
    this.setVal(val);
    this.setOnInputListener(onInputListener);
    this.setOnChangeListener(onChangeListener);
  }

  setType(type = config.default.type) {
    this.$dom.attr('type', type);
  }

  setPlaceholder(placeholder) {
    this.$dom.attr('placeholder', placeholder);
  }

  setVal(val) {
    this.$dom.val(val).change();
  }

  getVal() {
    return this.$dom.val();
  }

  setOnInputListener(onInputListener) {
    this.$dom.on('input', onInputListener);
  }

  setOnChangeListener(onChangeListener) {
    this.$dom.on('change', onChangeListener);
  }
}

function createInstance(args) {
  return new Input(args);
}

export default {
  createInstance,
};
