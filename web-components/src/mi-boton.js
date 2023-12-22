class MiBoton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', function (e) {
      alert('Hola, soy mi botón');
    });
  }
}

customElements.define('mi-boton', MiBoton);

customElements.define('mi-boton2', class extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', function (e) {
      alert('Hola, soy botón 2');
    });
  }
});
