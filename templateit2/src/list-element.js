import { LitElement,css, html } from 'lit';
export class ListElementComponent extends LitElement {

static styles = css`
    :host {
    color: blue;
    }
`;
static get properties() {
    return {
    items: { type: Array }
    };
    
}; 
constructor() {
    super();
}

render() {
    return html`
    <ul>
        ${this.items.map(item => html`<li>${item}</li>`)}
    </ul>
    `;
}


}
customElements.define('list-element', ListElementComponent);