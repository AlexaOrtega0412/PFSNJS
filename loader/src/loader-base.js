import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

export class LoaderBase extends LitElement {
  static styles = css`
    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh; 
      background: linear-gradient(135deg, #1e3c72, #2a5298);
      color: white; 
      font-family: Arial, sans-serif;
    }
    .loader {
      width: 50px;
      height: 50px;
    }
    .loading-text {
      margin-top: 10px;
      font-size: 1.2em;
    }
  `;

  renderLoader() {
    return html`
      <div class="loader-container">
        <img class="loader" src="https://i.gifer.com/ZZ5H.gif" alt="Cargando..." />
        <p class="loading-text">Cargando, por favor espera...</p>
      </div>
    `;
  }
}