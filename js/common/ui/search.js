import { Component } from './component.js';
import { Button } from './button.js';
import { Input } from './input.js';

const config = {
  template: `
    <div class='search'>
      <img>
      <div class='searchBar'></div>
    </div>
  `,
  initial: {
    url: 'https://api.scryfall.com/cards/named?exact=%CARDNAME&format=json',
    src: './img/card_back.png',
  },
};

function constructUrl(card) {
  if (!card) return '';
  return config.initial.url.replace(
    '%CARDNAME',
    card.replace(' ', '+'),
  );
}

export class Search extends Component {
  constructor({
    width,
    name,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.card = new Input({ placeholder: 'Card Name' });
    this.search = new Button({ label: 'Search' });
    this.search.setOnClickListener(this.onClickSearch.bind(this));

    $('.searchBar', this.$dom).append([
      this.card.getDom(),
      this.search.getDom(),
    ]);

    this.setCardBack();
  }

  async onClickSearch() {
    this.setCardBack();

    const url = constructUrl(this.card.getVal());

    if (!url) return;

    const result = await fetch(url);

    if (!result.ok) return;

    const json = await result.json();

    if (!json.image_uris || !json.image_uris.normal) return;

    $('img', this.$dom).attr('src', json.image_uris.normal);
  }

  setCardBack() {
    $('img', this.$dom).attr('src', config.initial.src);
  }
}

function createInstance(args) {
  return new Search(args);
}

export default {
  createInstance,
};
