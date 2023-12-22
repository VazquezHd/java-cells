import { LitElement,css, html } from 'lit';

export class TextInputComponent extends LitElement {

  static get properties() {
    return {
      value: { type: String }
    };
    
  }; 

  render() {
    return html`
      <p>
        <input type="text" 
          .value="${this.value}"
          @input="${this.inputChange}"
        >
      </p>

    `;
  }

  inputChange(e) {
    this.value = e.target.value;
    console.log(this.value)
    this.dispatchEvent(new CustomEvent('change', { detail: this.value}));
  }

  resetTexto(){
    this.myFact = '';
  }

}
customElements.define('text-input', TextInputComponent);