
let containerFlex = document.getElementById("container-flex");

let containerThankYou = document.getElementById("container-thank-you");

var valorPulsante = 0;

var button = document.getElementById("tastoSubmit").disabled = true;
var button = document.getElementById("tastoSubmit");

function numero1(){
    var pulsante1 = document.getElementById("pulsante1").value;
    valorPulsante = pulsante1;
    button.disabled = false;
}

function numero2(){
    var pulsante2 = document.getElementById("pulsante2").value;
    valorPulsante = pulsante2;
    button.disabled = false;
}

function numero3(){
    var pulsante3 = document.getElementById("pulsante3").value;
    valorPulsante = pulsante3;
    button.disabled = false;
}

function numero4(){
    var pulsante4 = document.getElementById("pulsante4").value;
    valorPulsante = pulsante4;
    button.disabled = false;
}

function numero5(){
    var pulsante5 = document.getElementById("pulsante5").value;
    valorPulsante = pulsante5;
    button.disabled = false;
}



function scelta(){
    containerFlex.style.position = "absolute";
    containerFlex.style.visibility = "hidden";
    containerThankYou.style.position = "static";
    containerThankYou.style.visibility = "visible";
    var pText = document.getElementById("chance-number").innerHTML = `You selected ${valorPulsante} out of 5`
}


/*
function scelta(){
    alert("prova");
}*/