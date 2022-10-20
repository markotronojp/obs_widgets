import { LifeBar } from './ui/lifeBar.js';

function init($container) {
  $container.append(
    [
      new LifeBar({}).getDom(),
    ],
  );
}

export default {
  init,
};
