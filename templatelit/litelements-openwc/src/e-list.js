import { LitElement,css, html } from 'lit';
import '../src/e-contact'
export class eListComponent extends LitElement {

  static styles = css`
    :host {
      color: blue;
    }
  `;
  static get properties() {
    return {
      prop1:{type: String},
      prop2:{type: String},
      prop3:{type: Boolean},
      prop4:{type: String}
      // contactos: {
      //   type: Array
      // }
    };

  };
  constructor() {
    super();
    this.prop1 = 'text binding';
    this.prop2 = 'mydiv';
    this.prop3 = true;
    this.prop4 = 'pie';


    // this.contactos = [
    //   {
    //     nombre:'Juan Godinez',
    //     email: 'user1_some_email@gmail.com'
    //   },
    //   {
    //     nombre:'Hugo Sanchez',
    //     email: 'user2_some_email@gmail.com'
    //   },
    //   {
    //     nombre:'Jhon Doe',
    //     email: 'user3_some_email@gmail.com'
    //   },
  }

  render() {
    return html`
    sdf
    <div>${this.prop1}</div>

    <div id="${this.prop2}" > atribute binding</div>

    <div>
      boolean attribute binding
      <input type= >
    </div>
    <!-- <div>
        ${this.contactos.map( contact => html` <e-contact nombre="${contact.nombre}" email="${contact.email}"></-contact>`)}
      </div> -->
    `;

  }
}
customElements.define('e-list', eListComponent);



