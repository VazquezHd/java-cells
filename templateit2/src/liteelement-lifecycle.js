import { LitElement,css, html } from 'lit-element';

export class LiteelementLifecycle extends LitElement {

    constructor() {
        super();
        this.title = 'No title';
        this.icon = undefined;
    }

static get properties() {
    return {
    title: { type: String },
    icon: { type: String },
    }
}

render() {
    // console.log{'            render'};
    return html`
    <h1>Title is: ${this.title}</h1>
    <h3>Icon is: ${this.ico}</h3>

    `;
}

_enqueueUpdate() {
    console.log('_enqueueUpdate called')
    const result = super._enqueueUpdate();
    console.log('_enqueueUpdate returns', + result);
    return result;
}

}
customElements.define('liteelement-lifecycle', LiteelementLifecycle);
