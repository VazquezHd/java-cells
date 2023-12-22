import { LitElement,css, html } from 'lit-element';
import {SuperElemento } from "./superE.js";

export class HerenciaElemento extends SuperElemento {

static get styles() {
    return [
    super.styles,
    css`button { color:red; }`
    ];
    
}; 

}
customElements.define('herencia-elemento', HerenciaElemento);