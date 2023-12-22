class MiMensaje extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', function (e) {
            alert('Click en mensaje');
        });
        console.log('constructor: Cuando el elemento es creado');
    }

    static get observedAttributes() {
        return ['msj', 'casi-visible'];
    }

    connectedCallback() {
        console.log('connected callBack: Cuando el documento es insertado en el documento');
    }

    disconnectedCallback() {
        console.log('disconnected : Cuando el elemento es eliminado del documento');
    }

    adoptedCallback() {
        alert('adoptedCallback: Cuando el elemento es adoptado por otro documento');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log('attributeChangedCallback: Cuando cambia un atributo');
        if (attrName === 'msj') {
            this.pintarMensaje(newVal);
        }
        if (attrName === 'casi-visible') {
            this.setcasiVisible();
        }
    }

    pintarMensaje(msj) {
        this.innerHTML = msj;
    }

get casiVisible() {
    return this.hasAttribute('casi-visible');
}

set casiVisible(value) {
    if (value) {
        this.setAttribute('casi-visible', '');
    } else {
        this.removeAttribute('casi-visible');
    }
}

setcasiVisible() {
    if (this.casiVisible) {
        this.style.opacity = 0.1;
    } else {
        this.style.opacity = 1;
    }
}



}


customElements.define('mi-mensaje', MiMensaje);

let miMensaje = document.createElement('mi-mensaje');
miMensaje.setAttribute('msj', 'Otro mensaje');
document.body.appendChild(miMensaje);

let tercerMensaje = new MiMensaje();
tercerMensaje.setAttribute('msj', 'tercer mensaje','casi-visible', '');
document.body.appendChild(tercerMensaje);
