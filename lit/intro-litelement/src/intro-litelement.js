import { LitElement, html } from 'lit-element';

export class IntroLitelement extends LitElement {

    render() {
        return html`
        <p>Intro a litelements prro</p>
        `;
    }
}
customElements.define('intro-litelement', IntroLitelement);