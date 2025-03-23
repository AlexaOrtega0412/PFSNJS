import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './loader-component.js';

class MyApp extends LitElement {
  static properties = {
    isLoading: { type: Boolean },
  };

  constructor() {
    super();
    this.isLoading = true;
  }

  firstUpdated() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); 
  }

  render() {
    return html`
      ${this.isLoading
        ? html`<loader-component></loader-component>`
        : html`<h1>¡Contenido cargado!</h1>`
      }
    `;
  }
}

customElements.define('my-app', MyApp);