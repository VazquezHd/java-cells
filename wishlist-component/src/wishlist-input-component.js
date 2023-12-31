import { LitElement,css, html } from 'lit';
export class WishListInput extends LitElement{
    static get styles(){
        return css `
        .input-text{
        width: 90%;
        height: 50px;
        font-size: 20px;
        font-family: 'Rockwell', serif;
        color: #c00;
        border-radius: 10px;
        }
        div{
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            font-family: 'Rockwell', serif;
        }
        `;
    }
    static get properties(){
        return {
            value: { type: String}
        };
    }

    render(){
        return html`
        <div>
            
        <input class="input-text" type="text" .value="${this.value}"
                        @input="${this.inputKeyDown}">
        </div>
        


        
        `;
    }
    inputKeyDown(e){
        this.value = e.target.value;
        this.dispatchEvent(new CustomEvent('keydown', {
            detail: e.target.value
        }));          
    }

}
