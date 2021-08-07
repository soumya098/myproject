function ageindays() {
  var birth_yr = prompt("Enter the year you were born");
  var result = (2020 - birth_yr) * 365;
  var h3 = document.createElement("h3");
  var ans = document.createTextNode("you are " + result + " days old.");
  h3.appendChild(ans);
  document.getElementById("result").appendChild(h3);
}
function reset() {
  let ele = document.getElementById("result");
  ele.removeChild(ele.firstChild);
}

//cat-generatror-->>

function generator() {
  var img = document.createElement("img");
  var div = document.getElementById("catbox");
  img.setAttribute("src", "images/cat3.gif");
  div.appendChild(img);
}

//rock-paper-scissor game-->>

function rpsgame(yourchoice) {
  var humanchoice, botchoice;
  humanchoice = yourchoice.id;
  botchoice = numtochoice(randomnum(3));
  console.log("you-choose: " + humanchoice, "\nbot-choose: " + botchoice);

  var result = decideWinner(humanchoice, botchoice);
  var Message = finalMessage(result[0]);
  console.log(Message);
  frontend(humanchoice, botchoice, Message);
}

function randomnum(x) {
  return Math.floor(Math.random() * x);
}
function numtochoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function decideWinner(yours, comps) {
  var rpsobj = {
    rock: { rock: 0.5, paper: 0, scissor: 1 },
    paper: { rock: 1, paper: 0.5, scissor: 0 },
    scissor: { rock: 0, paper: 1, scissor: 0.5 },
  };
  var yourscore = rpsobj[yours][comps];
  var compscore = rpsobj[comps][yours];
  return [yourscore, compscore];
}

function finalMessage(yourscore) {
  if (yourscore === 0) {
    return { msg: "You Lost", color: "red" };
  } else if (yourscore === 1) {
    return { msg: "You Won", color: "green" };
  } else {
    return { msg: "You Tied", color: "yellow" };
  }
}

function frontend(yourchoice, botchoice, Message) {
  var imgdbs = {
    rock: "images/rock.png",
    paper: "images/paper.jpg",
    scissor: "images/scissor.png",
  };
  document.getElementById("paper").remove();
  document.getElementById("rock").remove();
  document.getElementById("scissor").remove();

  let img1 = document.createElement("img");
  img1.src = imgdbs[yourchoice];
  img1.setAttribute("id", "yourchoice");

  let img2 = document.createElement("img");
  img2.src = imgdbs[botchoice];
  img2.setAttribute("id", "botchoice");

  let h4 = document.createElement("h4");
  let text = document.createTextNode(Message["msg"]);
  h4.setAttribute("id", Message["color"]);
  h4.appendChild(text);

  var divarr = document.getElementsByClassName("game");
  divarr[0].appendChild(img1);
  divarr[1].appendChild(h4);
  divarr[2].appendChild(img2);

  setTimeout(() => {
    document.location.reload(true);
  }, 1500);
}

//btn color change-->>

let All_Btns = document.getElementsByTagName("button");
console.log(All_Btns);
// console.log(typeof(All_Btns));

var ColorArr = [];
for (let i = 0; i < All_Btns.length; i++) {
  ColorArr.push(All_Btns[i].classList[1]);
}

function BtnColorChanger(colorchoosed) {
  let choosed = colorchoosed.value;
  console.log(choosed);
  if (choosed === "red") {
    all_red();
  }
  if (choosed === "green") {
    all_green();
  }
  if (choosed === "reset") {
    original_color();
  }
  if (choosed === "random") {
    random_color();
  }
}

function all_red() {
  for (let i = 0; i < All_Btns.length; i++) {
    All_Btns[i].classList.remove(All_Btns[i].classList[1]);
    All_Btns[i].classList.add("btn-danger");
  }
}
function all_green() {
  for (let i = 0; i < All_Btns.length; i++) {
    All_Btns[i].classList.remove(All_Btns[i].classList[1]);
    All_Btns[i].classList.add("btn-success");
  }
}
function random_color() {
  for (let i = 0; i < All_Btns.length; i++) {
    let randnum = randomnum(4);
    All_Btns[i].classList.remove(All_Btns[i].classList[1]);
    All_Btns[i].classList.add(ColorArr[randnum + 2]);
  }
}
function original_color() {
  for (let i = 0; i < All_Btns.length; i++) {
    All_Btns[i].classList.remove(All_Btns[i].classList[1]);
    All_Btns[i].classList.add(ColorArr[i]);
  }
}
