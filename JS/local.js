/*var emp={
    name:"john",
    age:21,

}
let obtostr = JSON.stringify(emp);

console.log(typeof obtostr);
//localStorage.setItem("key",obtostr);
var tojson=JSON.parse(obtostr);
console.log(typeof tojson);
*/

var a = document.getElementById("add");
function add() {
    console.log("adding to list....");
    var tit = document.getElementById("title").value;
    var desc = document.getElementById("description").value;

    if (localStorage.getItem("itemsjson") == null) {
        itemsjsonarr = [];
        itemsjsonarr.push([tit, desc]);
        localStorage.setItem("itemsjson", JSON.stringify(itemsjsonarr));
    }
    else {
        itemsjsonarrstr = localStorage.getItem("itemsjson");
        itemsjsonarr = JSON.parse(itemsjsonarrstr);
        itemsjsonarr.push([tit, desc]);
        localStorage.setItem("itemsjson", JSON.stringify(itemsjsonarr));
    }
    update();
}

function update() {
    console.log("updating list....");
    if (localStorage.getItem('itemsjson') == null) {
        itemsjsonarr = [];
        localStorage.setItem("itemsjson", JSON.stringify(itemsjsonarr));
    }
    else {
        itemsjsonarrstr = localStorage.getItem("itemsjson");
        itemsjsonarr = JSON.parse(itemsjsonarrstr);
    }

    //populate the table
    let tableBody = document.getElementById("tb");
    let str = "";
    itemsjsonarr.forEach((element, index) => {
        str += `
        <tr>
        <th>${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td class="text-center"><button class="btn btn-primary" onclick="clicked(${index})" >Delete</button></td>
        </tr>`;
    });
    document.getElementById("tb").innerHTML = str;
}

function clicked(itemindex) {
    let x=itemindex
    console.log("deleting", x+1);
    itemsjsonarrstr = localStorage.getItem("itemsjson");
    itemsjsonarr = JSON.parse(itemsjsonarrstr);
    itemsjsonarr.splice(itemindex, 1);
    localStorage.setItem("itemsjson", JSON.stringify(itemsjsonarr));
    update();
}

a.addEventListener("click", add);
update();




