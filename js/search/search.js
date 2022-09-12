import { Search } from '../common/ui/search.js';

function init($container) {
  const search = new Search({});
  $container.append(search.getDom());
}

export default {
  init,
};
