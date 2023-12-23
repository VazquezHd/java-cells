import { LitElement,css, html } from 'lit';
export class eContactComponent extends LitElement {

  static styles = css`
    :host {
      color: blue;
    }
  `;
  static properties = {
    nombre: {type:String},
    email: {type:String},
    verMas: {type:Boolean},

  };
  constructor() {
    super();
    this.verMas = false;
  }

  render() {
    return html`
      <style>
        div {
          border:1px solid #ddd;
          padding:10px;
          border-radius:5px;
          display: inline-block;
        }
        h1 {
          font-size:1.2em;
          font-weight:normal
        }
      </style>

      <div>
        <h1>${this.nombre}</h1>
        <p><a href="#" @click="${this.toggle}">Ver más</a></p>

        ${this.verMas ? html`Email:${this.email}` : ''}
      </div>
    `;
  }

  toggle(e){
    e.preventDefault();
    this.verMas = !this.verMas;
  }
}
customElements.define('e-contact', eContactComponent);
