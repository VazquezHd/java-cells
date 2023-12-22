import { LitElement,css, html } from 'lit-element';

export class SuperElemento extends LitElement {

  static get styles() {
    return css`
      button {
        height: 20px;
        width: 200px;
        font-style: italic;
        font-weight: bold;
      }
    `;
    
  }; 

  render() {
    return html`
      <button>Click aqui</button>
    `;
  }

}
customElements.define('super-elemento', SuperElemento);