import { Component } from '../../common/ui/component.js';
import { Content } from '../../common/ui/content.js';

const config = {
  template: `
    <div class='dX'>
    </div>
  `,
  default: {
    color: '#000',
    fontSize: '5rem',
    side: 20,
  },
};

export class DX extends Component {
  constructor({
    width,
    name,
    side,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.content = new Content({
      color: config.default.color,
      fontSize: config.default.fontSize,
      content: `d${side}`,
    });
    this.$dom.append(this.content.getDom());
    this.setSide(side);
    this.$dom.on('click', this.onClickDX.bind(this));
  }

  setSide(side = config.default.side) {
    this.side = side;
    if (!$.isNumeric(this.side)) {
      this.side = config.default.side;
    }
  }

  onClickDX() {
    this.content.setContent(
      `d${this.side}: ${Math.floor(Math.random() * this.side) + 1}`,
    );
  }
}

function createInstance(args) {
  return new DX(args);
}

export default {
  createInstance,
};