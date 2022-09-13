import { D6 } from './ui/d6.js';
import { D20 } from './ui/d20.js';

function init($container) {
  const d6 = new D6({});
  $container.append(d6.getDom());
  const d20 = new D20({});
  $container.append(d20.getDom());
}

export default {
  init,
};
