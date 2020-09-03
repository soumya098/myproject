

function ageindays() {
    var birth_yr = prompt("Enter the year you were born");
    var result = (2020 - birth_yr) * 365;
    var h3 = document.createElement("h3");
    var ans = document.createTextNode("you are " + result + " days old.");
    h3.setAttribute("id", "ageindays");
    h3.appendChild(ans);
    document.getElementById("result").appendChild(h3);
}

function reset() {
    document.getElementById("ageindays").remove();
}