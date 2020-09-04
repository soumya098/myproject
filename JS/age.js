

function ageindays() {
    var birth_yr = prompt("Enter the year you were born");
    var result = (2020 - birth_yr) * 365;
    var h3 = document.createElement("h5");
    var ans = document.createTextNode("you are " + result + " days old.");
    h3.setAttribute("id", "ageindays");
    h3.appendChild(ans);
    document.getElementById("result").appendChild(h3);
}

function reset() {
    document.getElementById("ageindays").remove();
}


function generator() {
    var img = document.createElement("img");
    var div = document.getElementById("catbox");
    img.setAttribute("src", "cat3.gif");
    div.appendChild(img);
}

//rps game-->>

function rpsgame(yourchoice) {
    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    botchoice = numtochoice(randomnum());
    console.log("you-choose: " + humanchoice, "\nbot-choose: " + botchoice);

    var result = decideWinner(humanchoice, botchoice);
    var Message = finalMessage(result[0]);
    console.log(Message);
    frontend(humanchoice, botchoice, Message);

}

function randomnum() {
    return Math.floor(Math.random() * 3);
}
function numtochoice(number) {
    return ["rock", "paper", "scissor"][number];
}

function decideWinner(yours, comps) {
    var rpsobj = {
        "rock": { "rock": 0.5, "paper": 0, "scissor": 1 },
        "paper": { "rock": 1, "paper": 0.5, "scissor": 0 },
        "scissor": { "rock": 0, "paper": 1, "scissor": 0.5 },
    };
    var yourscore = rpsobj[yours][comps];
    var compscore = rpsobj[comps][yours];
    return [yourscore, compscore];
}

function finalMessage(yourscore) {
    if (yourscore === 0) {
        return { "msg": "you Lost", "color": "red" };
    }
    else if (yourscore === 1) {
        return { "msg": "You Won", "color": "green" };
    }
    else {
        return { "msg": "You Tied", "color": "yellow" };
    }

}

function frontend(yourchoice, botchoice, Message) {
    var imgdbs = {
        "rock": "rock.png",
        "paper": "paper.jpg",
        "scissor": "scissor.png",
    }
    document.getElementById("paper").remove();
    document.getElementById("rock").remove();
    document.getElementById("scissor").remove();

    let img1 = document.createElement("img");
    img1.src = imgdbs[yourchoice];
    img1.setAttribute("id", "yourchoice");

    let img2 = document.createElement("img");
    img2.src = imgdbs[botchoice];
    img2.setAttribute("id", "botchoice");


    let h5 = document.createElement("h5");
    let text = document.createTextNode(Message["msg"]);
    h5.setAttribute("id", Message["color"]);
    h5.appendChild(text);

    var divarr = document.getElementsByClassName("game");
    divarr[0].appendChild(img1);
    divarr[1].appendChild(h5);
    divarr[2].appendChild(img2);

    setTimeout(() => { document.location.reload(true); }, 1500);



}

