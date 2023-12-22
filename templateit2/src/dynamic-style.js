import { LitElement,css,html } from "lit-element";
import { classMap } from "lit-html/directives/class-map.js";
import { styleMap } from "lit-html/directives/style-map.js";

export class DynamicStyle extends LitElement {

    static get properties(){
        return{
            classes: {type: Object},
            styles: {type: Object}
        };
    }
    static get styles(){
        return css`
        .mydiv{background-color: blue;}
        .someclass{border: 1px solid red;}
        `;
    }
    constructor(){
        super();
        this.classes = {mydiv: true, someclass: true};
        this.styles = {color:'white', fontFamily: 'Rockwell'};
    }
    render(){
        return html `
        <div class=${classMap(this.classes)} style= ${styleMap(this.styles)}>Algun contenido aqui</div>
        `;
    }
}

customElements.define('dynamic-style',DynamicStyle);
