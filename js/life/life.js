import { Player } from './ui/player.js';
import { Controller } from './ui/controller.js';

class Life {
  constructor($container) {
    this.p1 = new Player({});
    this.p2 = new Player({});
    this.p1Ctrl = new Controller({
      onPoisonChange: this.onP1PoisonChange.bind(this),
      onCommanderChange: this.onP1CommanderChange.bind(this),
      onLifeTotalChange: this.onP1LifeTotalChange.bind(this),
      onNicknameChange: this.onP1NicknameChange.bind(this),
    });
    this.p2Ctrl = new Controller({
      onPoisonChange: this.onP2PoisonChange.bind(this),
      onCommanderChange: this.onP2CommanderChange.bind(this),
      onLifeTotalChange: this.onP2LifeTotalChange.bind(this),
      onNicknameChange: this.onP2NicknameChange.bind(this),
    });

    $('.display', $container).append([
      this.p1.getDom(),
      this.p2.getDom(),
    ]);
    $('.control', $container).append([
      this.p1Ctrl.getDom(),
      this.p2Ctrl.getDom(),
    ]);

    this.p1Ctrl.lifeTotal.setVal(20);
    this.p2Ctrl.lifeTotal.setVal(20);
    this.p1Ctrl.nickname.setVal('Player 1');
    this.p2Ctrl.nickname.setVal('Player 2');
  }

  onP1PoisonChange() {
    this.p1.setPoison(
      this.p1Ctrl.poison.getVal(),
    );
  }

  onP1CommanderChange() {
    this.p1.setCommander(
      this.p1Ctrl.commander.getVal(),
    );
  }

  onP1LifeTotalChange() {
    this.p1.setLifeTotal(
      this.p1Ctrl.lifeTotal.getVal(),
    );
  }

  onP1NicknameChange() {
    this.p1.setNickname(
      this.p1Ctrl.nickname.getVal(),
    );
  }

  onP2PoisonChange() {
    this.p2.setPoison(
      this.p2Ctrl.poison.getVal(),
    );
  }

  onP2CommanderChange() {
    this.p2.setCommander(
      this.p2Ctrl.commander.getVal(),
    );
  }

  onP2LifeTotalChange() {
    this.p2.setLifeTotal(
      this.p2Ctrl.lifeTotal.getVal(),
    );
  }

  onP2NicknameChange() {
    this.p2.setNickname(
      this.p2Ctrl.nickname.getVal(),
    );
  }

  run() {
    /* Temporary */
    this.isRunning = true;
  }
}

function init($container) {
  const life = new Life($container);
  life.run();
}

export default {
  init,
};
