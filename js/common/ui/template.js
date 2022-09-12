import { Component } from './component.js';

const config = {
  template: `
    <div class='template'></div>
  `,
};

export class Template extends Component {
  constructor({
    width,
    name,
  }) {
    super({ width, name, $dom: $(config.template) });
  }
}

function createInstance(args) {
  return new Template(args);
}

export default {
  createInstance,
};