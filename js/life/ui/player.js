import { Component } from '../../common/ui/component.js';
import { Content } from '../../common/ui/content.js';

const config = {
  template: `
    <div class='player'>
      <div class='top'>
      </div>
    </div>
  `,
  smlFontSize: '2rem',
  medFontSize: '3rem',
  lrgFontSize: '7rem',
  default: {
    color: '#fff',
    skull: '💀',
    crown: '🫅',
  },
};

export class Player extends Component {
  constructor({
    width,
    name,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.poison = new Content({ fontSize: config.smlFontSize, color: config.default.color });
    this.commander = new Content({ fontSize: config.smlFontSize, color: config.default.color });
    this.lifeTotal = new Content({ fontSize: config.lrgFontSize, color: config.default.color });
    this.nickname = new Content({ fontSize: config.medFontSize, color: config.default.color });
    $('.top', this.$dom).append([
      this.poison.getDom(),
      this.commander.getDom(),
    ]);
    this.$dom.append([
      this.lifeTotal.getDom(),
      this.nickname.getDom(),
    ]);
  }

  setPoison(poison) {
    if (poison.trim() === '') {
      this.poison.setContent(poison);
    }
    if (!$.isNumeric(poison)) return;
    this.poison.setContent(`${String.fromCodePoint(config.default.skull.codePointAt(0))}: ${poison}`);
  }

  setCommander(commander) {
    if (commander.trim() === '') {
      this.commander.setContent(commander);
    }
    if (!$.isNumeric(commander)) return;
    this.commander.setContent(`${String.fromCodePoint(config.default.crown.codePointAt(0))}: ${commander}`);
  }

  setNickname(nickname) {
    this.nickname.setContent(nickname);
  }

  setLifeTotal(lifeTotal) {
    if (lifeTotal.trim() === '') {
      this.lifeTotal.setContent(lifeTotal);
    }
    if (!$.isNumeric(lifeTotal)) return;
    this.lifeTotal.setContent(lifeTotal);
  }
}

function createInstance(args) {
  return new Player(args);
}

export default {
  createInstance,
};
