import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/meme-maker/meme-maker.js';
import 'meme-card-2/src/meme-card-2';
import 'meme-card-ashnaa/src/meme-card-ashnaa';


//const meme=new URL('../assets/meme.jpg', import.meta.url).href;

export class CardList extends LitElement {
  static properties = {
    
  };

  constructor() {
    super();
  }

  render() {
    return html`
    <!-- HARD CODING THE CARD FIVE TIMES
     <meme-card-ashnaa></meme-card-ashnaa>
     <meme-card-ashnaa name="dog"></meme-card-ashnaa>
     <meme-card-ashnaa name="NOSE" top="king" bottom="dog"></meme-card-ashnaa>
     <meme-card-ashnaa></meme-card-ashnaa>
     <meme-card-ashnaa></meme-card-ashnaa>

    
     
     <meme-card-2></meme-card-2>
     <meme-card-2 name=top></meme-card-2>
     <meme-card-2 name=top top=omg></meme-card-2>
     <meme-card-2></meme-card-2>
     <meme-card-2></meme-card-2>
     -->
     
     
    `;
  }
}

customElements.define('card-list', CardList);