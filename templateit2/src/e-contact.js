import { html, css, LitElement } from 'lit';
import {map} from 'lit/directives/map.js'
export class EContact extends LitElement {

static get properties() {
return {
    nombre: {type: String},
    email: {type: String},
    saludar: {type: Boolean}
};
};

constructor() {
    super();
    this.saludar = false;
}

toggle(e) {
    e.preventDefault();
    this.saludar = !this.saludar;
}

render() {
    return html`
    <div>
        <p><a href="#" @click="${this.toggle}"> Hi Saludame</a></p>
    </div>
${this.saludar ?
	html`Hola mi nombre es ${this.nombre} manda tu correo ${this.email} ` :
	html`No me quieres saludar`}
    `;
}
}
customElements.define('e-contact', EContact);