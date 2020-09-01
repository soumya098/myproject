
function date_time(){
    let a= new Date();
    let time=a.toLocaleTimeString();
    let date=a.toDateString();
    document.getElementById("time-display").innerHTML=time+" <br/>on "+date;
}

setInterval(date_time,1000);