import { Component } from '../../common/ui/component.js';

const config = {
  template: `
    <div class='lifeBar'>
      <div class='nickname'>Player</div>
      <div class='life bar'>
        <div class='minus ctrl'>-</div>
        <div class='label'>Life</div>
        <div class='background'></div>
        <div class='plus ctrl'>+</div>
      </div>
      <div class='poison bar'>
        <div class='minus ctrl'>-</div>
        <div class='label'>Poison</div>
        <div class='background'></div>
        <div class='plus ctrl'>+</div>
      </div>
      <div class='commander bar'>
        <div class='minus ctrl'>-</div>
        <div class='label'>Commander</div>
        <div class='background'></div>
        <div class='plus ctrl'>+</div>
      </div>
      <input type='text' class='nicknameInput' placeholder='Player'>
    </div>
  `,
  default: {
    life: 20,
    commander: 20,
    poison: 0,
    maxPoison: 10,
    maxLife: 20,
    maxCommander: 20,
    playerName: 'Player',
  },
};

export class LifeBar extends Component {
  constructor({
    width,
    name,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.life = config.default.life;
    this.commander = config.default.commander;
    this.poison = config.default.poison;

    this.setLifeLabel();
    this.setPoisonLabel();
    this.setCommanderLabel();

    this.setLifeWidth();
    this.setPoisonWidth();
    this.setCommanderWidth();

    $('.life .plus', this.$dom).on('click', this.onAddLifeClick.bind(this));
    $('.life .minus', this.$dom).on('click', this.onMinusLifeClick.bind(this));

    $('.poison .plus', this.$dom).on('click', this.onAddPoisonClick.bind(this));
    $('.poison .minus', this.$dom).on('click', this.onMinusPoisonClick.bind(this));

    $('.commander .plus', this.$dom).on('click', this.onAddCommanderClick.bind(this));
    $('.commander .minus', this.$dom).on('click', this.onMinusCommanderClick.bind(this));

    $('.nicknameInput', this.$dom).on('input change', this.onChangeNicknameInput.bind(this));
  }

  onChangeNicknameInput() {
    if (!$('.nicknameInput', this.$dom).val()) {
      $('.nickname', this.$dom).text(config.default.playerName);
      return;
    }

    $('.nickname', this.$dom).text($('.nicknameInput', this.$dom).val());
  }

  onAddLifeClick() {
    this.addLife();
    this.setLifeLabel();
    this.setLifeWidth();
  }

  onMinusLifeClick() {
    this.minusLife();
    this.setLifeLabel();
    this.setLifeWidth();
  }

  onAddPoisonClick() {
    this.addPoison();
    this.setPoisonLabel();
    this.setPoisonWidth();
  }

  onMinusPoisonClick() {
    this.minusPoison();
    this.setPoisonLabel();
    this.setPoisonWidth();
  }

  onAddCommanderClick() {
    this.addCommander();
    this.setCommanderLabel();
    this.setCommanderWidth();
  }

  onMinusCommanderClick() {
    this.minusCommander();
    this.setCommanderLabel();
    this.setCommanderWidth();
  }

  addLife() {
    this.life += 1;
  }

  addPoison() {
    this.poison += 1;
  }

  addCommander() {
    this.commander += 1;
  }

  minusLife() {
    this.life -= 1;
  }

  minusPoison() {
    this.poison -= 1;
  }

  minusCommander() {
    this.commander -= 1;
  }

  setLifeLabel() {
    $('.life .label', this.$dom).text(`Life: ${this.life}`);
  }

  setPoisonLabel() {
    $('.poison .label', this.$dom).text(`Poison: ${this.poison}`);
  }

  setCommanderLabel() {
    $('.commander .label', this.$dom).text(`Commander: ${this.commander}`);
  }

  setLifeWidth() {
    let width = 100 * (this.life / config.default.maxLife);
    if (width > 100) width = 100;
    if (width < 0) width = 0;
    $('.life .background', this.$dom).css('width', `${width}%`);
  }

  setPoisonWidth() {
    let width = 100 * (this.poison / config.default.maxPoison);
    if (width > 100) width = 100;
    if (width < 0) width = 0;
    $('.poison .background', this.$dom).css('width', `${width}%`);
  }

  setCommanderWidth() {
    let width = 100 * (this.commander / config.default.maxCommander);
    if (width > 100) width = 100;
    if (width < 0) width = 0;
    $('.commander .background', this.$dom).css('width', `${width}%`);
  }
}

function createInstance(args) {
  return new LifeBar(args);
}

export default {
  createInstance,
};
