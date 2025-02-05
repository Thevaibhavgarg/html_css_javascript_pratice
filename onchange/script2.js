function upadateValue(){
    log.innerText=input.value;
}

var input=
document.querySelector("input");
var log=
document.getElementById("log");
input.onpointermove=upadateValue;

upadateValue();