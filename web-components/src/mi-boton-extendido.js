class MiBotonExtendido extends HTMLButtonElement {
        constructor() {
        super();
        this.addEventListener('click', (e) => {
            console.log("Evento click: " + this.innerHTML);
            alert('MiBotonExtendido');
        });
        }


    static get ceName(){
        return 'mi-boton-extendido';
    }

    get is () {
        return this.getAttribute ('is');
    }

    set is (value){
        this.setAttribute('is', value || this.ceName);
    }
}

customElements.define('mi-boton-extendido', MiBotonExtendido, { extends: 'button' });

const MiBotonExtendido2 = document.createElement('button',{is: MiBotonExtendido.ceName});

MiBotonExtendido2.textContent = "Soy un mi-boton-extendidio2";
document.body.appendChild(MiBotonExtendido2);

const MiBotonExtendido3 = document.createElement('button',{is: MiBotonExtendido.ceName});
MiBotonExtendido3.textContent = "Hola-btn3";
document.querySelector("#container").appendChild(MiBotonExtendido3);
