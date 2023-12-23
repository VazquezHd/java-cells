function consultar() {
    fetch("./json/datos.json")
        .then(response => {
            return response.json();
        })
        .then(personas => {
            consultarPersonas(personas);
        })
        .catch(error => {
            console.log('Request error');
        });

    function consultarPersonas(personas) {
        var personas2 = [];
        var indice = 0;
        var table = document.getElementById("tabla");
        var row;
        for (i = 0; i < personas.length; i++) {
            if (document.querySelector('#id').checked) {
                if (personas[i]['id'] < "") {
                    personas2[indice] = personas[i];
                    indice++;
                }
            } else {
                if (document.getElementById("search").value != "") {
                    if (document.getElementById("search").value == personas[i]['employee_name']) {
                        personas2[indice] = personas[i];
                        indice++;
                    }
                } else {
                    personas2[indice] = personas[i];
                    indice++;
                }
            }
        }

        if (table.rows.length > 1) {

            var rowCount = table.rows.length;
            for (var j = rowCount - 1; j >= 1; j--) {
                table.deleteRow(j);
            }
        }

        for (i = 0; i < personas2.length; i++) {
            row = table.insertRow(table.length);
            row.insertCell(0).innerHTML = personas2[i]['id'];
            row.insertCell(1).innerHTML = personas2[i]['employee_name'];
            row.insertCell(2).innerHTML = personas2[i]['employee_salary'];
            row.insertCell(3).innerHTML = personas2[i]['employee_age'];


        }
    }

}


function limpiar() {
    fetch("./json/datos.json")
        .then(response => {
            return response.json();
        })
        .then(personas => {
            consultarPersonas(personas);
        })
        .catch(error => {
            console.log('Request error');
        });

    function consultarPersonas(personas) {
        var personas2 = [];
        var indice = 0;
        var table = document.getElementById("tabla");
        var row;
        for (i = 0; i < personas.length; i++) {
            if (document.querySelector('#id').checked) {
                if (personas[i]['id'] < "") {
                    personas2[indice] = personas[i];
                    indice++;
                }
            }
        }

        if (table.rows.length > 1) {

            var rowCount = table.rows.length;
            for (var j = rowCount - 1; j >= 1; j--) {
                table.deleteRow(j);
            }
        }


    }

}

class WebComponent extends HTMLElement {
    constructor() {
        const tpl = document.querySelector('template');

        const tplInts = tpl.content.cloneNode(true);

        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tplInts);

    }

}
customElements.define('mi-titulo', WebComponent);

class WebComponent2 extends HTMLElement {
    constructor() {
        const tpl = document.querySelector('hgroup');

        const tplInts = tpl.content.cloneNode(true);

        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(tplInts);

    }

}