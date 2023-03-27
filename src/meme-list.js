import { LitElement, html, css } from 'lit';
import "./meme-card-ashnaa.js";
import "meme-card-2.js";

export class MemeList extends LitElement{
    static get tag() {
        return 'meme-list';
    }

    static get properties(){
        return {
            memes: { type: Array }, 
            memetype: { type: String },
           
        }
    
    }

    constructor(){
        super();
        this.memes = [
            {
                "image": "https://animalia-life.com/images2/borzoi/borzoi-9.jpg",
                "name": "borzoi!!",
                "detail": "big noze dog",
                "top": "woof",
                "bottom": "borzoi!"
            },
            {
                "image": "https://animalia-life.com/images2/borzoi/borzoi-9.jpg",
                "name": "borzoi!!",
                "detail": "big noze dog",
                "top": "woof",
                "bottom": "borzoi!"
            },
            {
                "image": "https://animalia-life.com/images2/borzoi/borzoi-9.jpg",
                "name": "borzoi!!",
                "detail": "big noze dog",
                "top": "woof",
                "bottom": "borzoi!"
            }
        ];
        this.memetype = 'Borzoi';
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            width: 400px;
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;

        }
        
        `;
    }
    
    render() {
        return html`
        <div class="wrapper">
            ${this.memes.map(memes => html`
            <div class="item">
                <meme-card-ashnaa name="${memes.name}" detail="${memes.detail}" top="${memes.top}" bottom="${memes.bottom}" image="${memes.image}"></meme-card-ashnaa>

            </div>
            
            `)}

        </div>
    
        `;
    }


}

customElements.define(MemeList.tag, MemeList);