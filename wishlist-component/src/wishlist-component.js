import { LitElement,css, html } from 'lit';

export class WishListComponent extends LitElement {

  static get styles(){
    return css `

    .main-container {
      margin: 50px auto;
      width: 500px;
      border-radius: 10px;
      background-color: #034f1b;
      justify-content: center;
      max-height: 600px;
      overflow: scroll;
      position: relative;
      
    }
    
    .title {
      text-align: center;
      color: #c00;
      font-size: 2.5em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    }
    
    .input-text {
      width: 300px;
      
    }
    
    .task-container {
      justify-content: start;
      display: flex;
      align-items: center;
      color: white;
    }
    
    .item {
      margin-left: 20px;
      cursor: pointer;
      width: 25px;
      height: 25px;
      text-align: start;
      background-color: #c00;
      border-radius: 50%;
      display: inline-block;
      color: #c00;
      
    }
    
    .item:checked + .label {
      text-decoration: line-through;
      color: #c00;
    }
    
    .label {
      transition: background-color 1s ease;
      font-size: 20px;
      width: 100%;
    }
    
    .btn-delete {
      width: 200px;
      height: 35px;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      background-color: #c00; 
      border-radius: 10px;
      cursor: pointer;
      color: #fff;
      font-size: 18px;
    }
    
    .btn-delete:hover {
      background-color: #a00; /* Cambia el color al pasar el mouse */
      
    }
    
    .btn-delete:active {
      box-shadow: 0 2px #666;
      transform: translateY(4px);
    }
    
    .btn-container {
      padding: 20px;
      text-align: center;
      
    }
    
    .btn-deletew{
      width: 100px;
      height: 20px;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      background-color: #BD2624; 
      border-radius: 10px;
      cursor: pointer;
      color: #fff;
      font-size: 15px;
    }
    .btn-edit{
      width: 100px;
      height: 20px;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      background-color: #246CAB; 
      border-radius: 10px;
      cursor: pointer;
      color: #fff;
      font-size: 15px;
    }

    .btn-edit:hover, .btn-deletew:hover {
      opacity: 0.8;
      box-shadow: 0 2px #666;
      transform: translateY(-2px);
    }
    .btn-edit:active, .btn-deletew:active {
      box-shadow: 0 2px #666;
      transform: translateY(4px);
    }
    `;
}
  static get properties(){
    return {
      miDato: {type: String},
      listaTareas : { type: Array}
    };
  }

  constructor(){
    super();
    this.miDato = ' ';
    this.listaTareas= [];
    this.timers = [];
  }

  render() {
    var listaTareasArr = [];
    this.listaTareas.forEach((tareas, index) => {
      listaTareasArr.push(html`
        <div class="task-container">
        <input type="checkbox" class="item" id='cb_${this.miDato}' @change=${(event) => this.setTimer(event,index)}>
          <label class="label" id="label">${tareas}</label>
          <button class="btn-edit" @click=${() => this.editTask(index)}>Editar</button>
          <button class="btn-deletew" @click=${() => this.removeTask(index)}>Eliminar</button>
        </div>
      `);
      try {
        if (index === this.listaTareas.length - 1) {
          this.timers[index] = {
            timeout1: setTimeout(() => {
              console.log('1');
              this.colors(index, '#CEAC5C');
            }, 2000),
            timeout2: setTimeout(() => {
              this.colors(index, '#BD2624');
            }, 5000),
            timeout3: setTimeout(() => {
              this.colors(index, '#471514');
            }, 8000)
          };
        }
      } catch (error) {
        alert('Opps ha ocurrido un error!!!')
      }
    });
    console.log(this.timers);

    return html`
      <div class="main-container">
        <h1 class="title">Mi lista de deseos </h1>
        <wishlist-input-component class="input-text" id="inputText" value=${this.miDato} @keydown="${this.inputKeyDown}"></wishlist-input-component>
        <div id="taskContainer">
          ${listaTareasArr}
        </div>
        <div class="btn-container">
          <button class="btn-delete" @click=${this.removeCheckBox}>Eliminar deseos</button>
        </div>
      </div>
    `;
  }

  inputKeyDown(e){
    if(e.key === 'Enter'){
      this.miDato = e.target.value;
      this.listaTareas.push(this.miDato);
      this.resetTexto(e);
    }
  }

  resetTexto(e){
    this.miDato = '';
    e.target.value = '';
  }
  setTimer(event, index) {
    
    const labels = this.shadowRoot.querySelectorAll('.item + label');
    const checkbox = event.target;

    if (!checkbox.checked) {
      labels[index].style.textDecoration = 'none';
    } else {
        labels[index].style.color = 'white';
        labels[index].style.textDecoration = 'line-through';
        labels[index].style.background = 'none';
        clearTimeout(this.timers[index].timeout1);
        clearTimeout(this.timers[index].timeout2);
        clearTimeout(this.timers[index].timeout3);
      
    }
  }
  colors(index, color) {
    try {
      const label = this.shadowRoot.querySelectorAll('.item + label');
    label[index].style.background = color;
    } catch (error) {
    }
    
}
  removeCheckBox(){
    this.listaTareas = [];
  }

}



