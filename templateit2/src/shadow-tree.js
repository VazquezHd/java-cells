import { html, css, LitElement } from 'lit';

export class ShadowTreeStyle extends LitElement {
static get styles() {
    return css`
      *{color: red;}
    p{ font-family: sans-serif; }
    .myclass { margin:100px; }
    #main { padding: 30px;}
    h1 { font-size: 4em;}
    `;
}

render() {
    return html`
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
    <p class="myclass">Párrafo 1</p>
    <p id="main">Párrafo 2</p>
    <h1>T i t u l o P e r r ó n</h1>
    `;
  }
}
customElements.define('shadow-tree', ShadowTreeStyle);