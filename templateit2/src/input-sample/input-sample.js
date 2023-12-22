import { LitElement,css, html } from 'lit';

export class InputSampleComponent extends LitElement {

  static styles = css`
    :host {
      display:block;
      padding: 25px;
      color: var(--input-sample-text-color, #000);
    }
  `;
  static get properties() {
    return {
      miDato: { type: String }
    };
    
  }; 
  constructor() {
    super();
    this.myFact = 'Este es el valor a borrar'
  }

  render() {
    return html`
      <p>Este es un elemento</p>
      <text-input value=${this.myFact} @change="${this.inputChanged}"></text-input>

      <p>El dato escrito es:   ${this.myFact}</p>
      <button @click=${this.resetTexto}>Borrar texto</button>
    `;
  }

  inputChanged(e) {
    this.myFact = e.detail;
  }

  resetTexto(){
    this.myFact = '';
  }

}
customElements.define('input-sample', InputSampleComponent);