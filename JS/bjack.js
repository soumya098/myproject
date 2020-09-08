let BlackJackGame = {
    "you": { "span": "#your-score", "div": "#your-box", "score": 0 },
    "dealer": { "span": "#dealer-score", "div": "#dealer-box", "score": 0 },
    "card": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"],
    "cardValue": { "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "K": 10, "Q": 10, "J": 10, "A": [1, 11] },
}
const you = BlackJackGame.you;
const dealer = BlackJackGame.dealer;
const hit_sound = new Audio("images/bjacksounds/swish.m4a");
const Win_sound=new Audio("images/bjacksounds/cash.mp3");
const loss_sound=new Audio("images/bjacksounds/aww.mp3");

function Randomcard() {
    let Randomnum = Math.floor(Math.random() * 13);
    return BlackJackGame.card[Randomnum];
}

function Btn_Hit() {
    let card = Randomcard();
    showcard(you, card);
    updatecore(you, card);
    showscore(you);
}

function showcard(player, card) {
    if (player.score < 21) {
        let cardimage = document.createElement("img");
        cardimage.src = `images/bjackimages/${card}.png`; //this is templeting
        document.querySelector(player.div).appendChild(cardimage);
        hit_sound.play();
    }
}
function Btn_Deal() {
    ShowWinner(ComputeWinner());
    let your_images = document.querySelector("#your-box").querySelectorAll("img");
    let dealer_images = document.querySelector("#dealer-box").querySelectorAll("img");
    for (let i = 0; i < your_images.length; i++) {
        your_images[i].remove();
    }
    for (let i = 0; i < dealer_images.length; i++) {
        dealer_images[i].remove();
    }
    hit_sound.play();
    you.score = 0;
    document.querySelector(you.span).innerText = 0;
    document.querySelector(you.span).style.color = "white";
    dealer.score = 0;
    document.querySelector(dealer.span).innerText = 0;
    document.querySelector(dealer.span).style.color = "white";

}

function updatecore(player, card) {
    //if adding 11 keeps me below 21 then add 11 else add 1
    if (card === "A") {
        if (player.score + BlackJackGame.cardValue[card][1] <= 21) {
            player.score += BlackJackGame.cardValue[card][1];
        }
        else {
            player.score += BlackJackGame.cardValue[card][0];
        }
    }
    else {
        player.score += BlackJackGame.cardValue[card];
    }
}

function showscore(player) {
    if (player.score <= 21) {
        document.querySelector(player.span).textContent = player.score;
    }
    else {
        document.querySelector(player.span).textContent = "Bust!";
        document.querySelector(player.span).style.color = "red";
    }
}



document.querySelector("#hit").addEventListener("click", Btn_Hit);
document.querySelector("#deal").addEventListener("click", Btn_Deal);
document.querySelector("#stand").addEventListener("click", DealerLogic);


function DealerLogic() {
    let card = Randomcard();
    showcard(dealer, card);
    updatecore(dealer, card);
    showscore(dealer);
}

function ComputeWinner() {
    let winner;
    //if your score less or equal to 21
    if (you.score <= 21) {
        if (you.score > dealer.score || dealer.score > 21) {
            winner = you;
        } else if (you.score < dealer.score) {
            winner = dealer;
        }
        else {
        }
    }
    //if your score greater than 21 but dealer score is under or equal to 21
    else if (you.score > 21 && dealer.score <= 21) {
        winner = dealer;
    }
    //both score are greater than 21
    else {
    }
    return winner;
}

function ShowWinner(winner){
    if(winner===you){
        console.log("you won");
        Win_sound.play();
    }
    else if(winner===dealer){
        console.log("you lost");
        loss_sound.play();
    }


}