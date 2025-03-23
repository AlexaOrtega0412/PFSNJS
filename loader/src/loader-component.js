import { LoaderBase } from './loader-base.js';

class LoaderComponent extends LoaderBase {
  render() {
    return this.renderLoader();
  }
}

customElements.define('loader-component', LoaderComponent);