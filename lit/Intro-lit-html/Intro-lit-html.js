import { html, render } from "./node_modules/lit-html/lit-html";

const cadena = ">>>>>>>>>>>>Contenido Dinamico<<<<<<<<<<<<"

const templateHolder = (paramString) => html `<h2> Contenido estatico (template) + ${paramString}</h2>`