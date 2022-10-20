import { Component } from '../../common/ui/component.js';

const config = {
  template: `
    <div class='d20'>
      <img src='img/d20.png'>
      <div></div>
    </div>
  `,
};

export class D20 extends Component {
  constructor({
    width,
    name,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.audio = new Audio('./audio/dice.mp3'); /* https://sounds-mp3.com/i-en-shake-and-roll-dice */
    this.setRandomSide();
    this.$dom.on('click', this.setRandomSide.bind(this));
  }

  setRandomSide() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
    $('div', this.$dom).empty();
    const result = Math.floor(Math.random() * 20) + 1;
    $('div', this.$dom).text(result);
  }
}

function createInstance(args) {
  return new D20(args);
}

export default {
  createInstance,
};
