let BlackJackGame = {
    "you": { "span": "#your-score", "div": "#your-box", "score": 0 },
    "dealer": { "span": "#dealer-score", "div": "#dealer-box", "score": 0 },
    "card":["2","3","4","5","6","7","8","9","10","K","Q","J","A"],
}
const you = BlackJackGame.you;
const dealer = BlackJackGame.dealer;
const hit_sound = new Audio("images/bjacksounds/swish.m4a");

function Randomcard(){
    let Randomnum= Math.floor(Math.random() * 13);
    return BlackJackGame.card[Randomnum];
}

function Btn_Hit() {
    hit_sound.play();
    showcard(you);
}
function showcard(player) {
    let cardimage = document.createElement("img");
    let card=Randomcard();
    cardimage.src = `images/bjackimages/${card}.png`; //this is templeting
    document.querySelector(player.div).appendChild(cardimage);
}
function Btn_Deal(){
    let your_images= document.querySelector("#your-box").querySelectorAll("img");
    let dealer_images= document.querySelector("#dealer-box").querySelectorAll("img");
    for(let i=0;i<your_images.length;i++){
        your_images[i].remove();
    }
    for(let i=0;i<dealer_images.length;i++){
        dealer_images[i].remove();
    }
    hit_sound.play();
}

function Btn_Stand(){
    showcard(dealer);
}
document.querySelector("#hit").addEventListener("click", Btn_Hit);
document.querySelector("#deal").addEventListener("click",Btn_Deal);
document.querySelector("#stand").addEventListener("click",Btn_Stand);
