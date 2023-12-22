import { LitElement,css, html } from 'lit-element';

export class MyConverter extends LitElement {

  static get properties() {
    return {
      myProp:{
        reflect: true,
        converter:{
          toAttribute(value){
            console.log('myProp\'s toAttribute.');
            console.log('Processing:', value, typeof(value));
            let retVal = String(value);
            console.log('Returning:', retVal, typeof(retVal));
            return retVal;
          },

          fromAttribute(value) {
            console.log('myProp\'s fromAttribute.');
            console.log('Processing:', value, typeof(value));
            let retVal = Number(value);
            console.log('Returning:', retVal, typeof(retVal));
            return retVal;
          }
        }
      },

      theProp: {
        reflect: true,
        converter(value) {
          console.log('myProp\'s converter.');
          console.log('Processing:', value, typeof(value));
          let retVal = Number(value);
          console.log('Returning:', retVal, typeof(retVal));
          return retVal;
        }
      }
    }
  }

  constructor() {
    super();
    this.myProp = 'myProp';
    this.theProp = 'theProp';
  }

  attributeChangedCallback(name, oldVal, newVal) {
    // console.log('attribute change:' name, newval);
    console.log("attribute change:", name, newVal );
    super.attributeChangedCallback(name, oldVal, newVal)
  }

  render() {
    return html`
      <p>myProp: ${this.myProp} type: ${typeof(this.myProp)}</p>
      <p>theProp ${this.theProp} type: ${typeof(this.theProp)}</p>

      <button @click="${this.changeProperties}">Change properties</button>
      <button @click="${this.changeAttributes}">Change attributes</button>
    `;
  }

  changeAttributes() {
    let randomString = Math.floor(Math.random()*100).toString();

    this.setAttribute('myProp', 'myProp' +  randomString);
    this.setAttribute('theProp', 'theProp' + randomString);
    this.requestUpdate();
  }

  changeProperties() { 
    let randomString =  Math.floor(Math.random()*100).toString();
    this.myProp = 'myProp' + randomString;
    this.theProp = 'theProp' + randomString;
  }

}
customElements.define('my-converter', MyConverter);