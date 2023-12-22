import { LitElement,css, html } from 'lit';
import '../src/list-element';

export class ColorListComponent extends LitElement {

static styles = css`
    :host {
    color: blue;
    }
`;
static get properties() {
    return {
    colors: { type: Array }
    };
    
}; 
constructor() {
    super();
    this.colors = ['Azul', 'Rosa', 'Morado', 'Negro','Blanco'];
}

render() {
    return html`
    <list-element .items="${this.colors}"></list-element>
    `;
}


}
customElements.define('color-list', ColorListComponent);