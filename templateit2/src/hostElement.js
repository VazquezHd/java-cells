import { LitElement,css, html } from 'lit';
export class HostElement extends LitElement {

static get styles() {
    return css`
    :host {
    display: block;
    background-color: azure;
    }
    :host([hidden]) {
    display: none;
    }
    :host(.blue) {
    background-color: aliceblue;
    color: blue;
    }
    p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    }
`;
}

render() {
    return html`
    <p>Lorem ipsum dolor sit, amet consectetur  ... </p>
    `;
}

}
customElements.define('host-element', HostElement);