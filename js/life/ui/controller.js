import { Component } from '../../common/ui/component.js';
import { Input } from '../../common/ui/input.js';

const config = {
  template: `
    <div class='controller'></div>
  `,
};

export class Controller extends Component {
  constructor({
    width,
    name,
    onPoisonChange,
    onCommanderChange,
    onLifeTotalChange,
    onNicknameChange,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.poison = new Input({
      placeholder: 'POI',
      onInputListener: onPoisonChange,
      onChangeListener: onPoisonChange,
      type: 'tel',
    });
    this.commander = new Input({
      placeholder: 'CMD',
      onInputListener: onCommanderChange,
      onChangeListener: onCommanderChange,
      type: 'tel',
    });
    this.lifeTotal = new Input({
      placeholder: 'Life Total',
      onInputListener: onLifeTotalChange,
      onChangeListener: onLifeTotalChange,
      type: 'tel',
    });
    this.nickname = new Input({
      placeholder: 'Nickname',
      onInputListener: onNicknameChange,
      onChangeListener: onNicknameChange,
      type: 'tel',
    });
    this.$dom.append([
      this.poison.getDom(),
      this.commander.getDom(),
      this.lifeTotal.getDom(),
      this.nickname.getDom(),
    ])
  }
}

function createInstance(args) {
  return new Controller(args);
}

export default {
  createInstance,
};