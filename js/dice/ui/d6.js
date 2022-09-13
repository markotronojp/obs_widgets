import { Component } from '../../common/ui/component.js';

const config = {
  template: `
    <div class='d6'>
    </div>
  `,
  rowTemplate: `
    <div class='row'></div>
  `,
  spacerTemplate: `
    <div class='spacer'></div>
  `,
  pipTemplate: `
    <div class='pip'></div>
  `,
};

const sideMatrix = [
  [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 1],
  ],
  [
    [1, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
  ],
  [
    [1, 0, 1],
    [1, 0, 1],
    [1, 0, 1],
  ],
];

export class D6 extends Component {
  constructor({
    width,
    name,
  }) {
    super({ width, name, $dom: $(config.template) });
    this.setRandomSide();
    this.$dom.on('click', this.setRandomSide.bind(this));
  }

  setRandomSide() {
    this.$dom.empty();
    const result = Math.floor(Math.random() * 6);

    sideMatrix[result].forEach((row) => {
      const $row = $(config.rowTemplate);
      row.forEach((pip) => {
        if (pip) {
          $row.append(
            $(config.spacerTemplate).append($(config.pipTemplate)),
          );
        } else {
          $row.append($(config.spacerTemplate));
        }
      });
      this.$dom.append($row);
    });
  }
}

function createInstance(args) {
  return new D6(args);
}

export default {
  createInstance,
};
