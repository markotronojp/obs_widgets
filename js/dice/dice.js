import { DX } from './ui/dX.js';

const dList = [
 6,
 20,
];

function init($container) {
  dList.forEach((side) => {
    const dX = new DX({ side });
    $container.append(dX.getDom());
  });
}

export default {
  init,
};