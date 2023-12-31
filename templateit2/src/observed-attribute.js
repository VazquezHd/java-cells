import { css, html,LitElement } from 'lit-element';

export class ObservedAttribute extends LitElement {

static get properties() { return {
    myProp: { attribute: true },
    theProp: { attribute: false },
    otherProp: { attribute: 'other-prop'}
    };
}

constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
    this.otherProp = 'otherProp';
}

attributeChangedCallback(name, oldVal, newVal) {
    console.log("attribute change:", name, newVal );
    super.attributeChangedCallback(name, oldVal, newVal)
}

render() {
    return html`
    <p>myProp ${this.myProp}</p>
    <p>theProp ${this.theProp}</p>
    <p>otherProp ${this.otherProp}</p>

    <button @click="${this.changeAttributes}">Change attribtes</button>
    `;
}

changeAttributes() {
    let randomString = Math.floor(Math.random()*100).toString();
    this.setAttribute('myprop', 'myprop' + randomString);
    this.setAttribute('theprop', 'theprop' + randomString);
    this.setAttribute('other-prop', 'other-prop' + randomString);
    this.requestUpdate();
}

updated(changedProperties){
    changedProperties.forEach( (oldValue, propName) => {
    console.log( `${propName} changed. oldValue: ${oldValue}`);
    });
}

}
customElements.define('observed-attribute', ObservedAttribute);

