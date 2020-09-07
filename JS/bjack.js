let BlackJackGame = {
    "you": { "span": "#your-score", "div": "#your-box", "score": 0 },
    "dealer": { "span": "#dealer-score", "div": "#dealer-box", "score": 0 }
}
let you=BlackJackGame.you;
let dealer=BlackJackGame.dealer;
document.querySelector("#hit").addEventListener("click", Btn_Hit);
function Btn_Hit() {
   let cardimage=document.createElement("img");
   cardimage.src="images/bjackimages/2.png";
   document.querySelector(you.div).appendChild(cardimage);
}