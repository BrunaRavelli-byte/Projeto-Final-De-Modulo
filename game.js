var verificação = 'a';
var contador = 2;
function resposta() {
     var responder = prompt('Digite sua resposta');
     while (contador >= 1) {  
    if (responder == verificação) {
        window.location.assign ("/segundaParte.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador--;
        responder = prompt('Digite sua resposta');
        window.location.assign("/gameover.html");
    }
}
        
    } 

var verificação2 = "c";
var contador2 = 3;
function resposta2() {
    var resposta2 = prompt ('Digite sua resposta');
    while (contador2 >= 1) {  
    if (resposta2 == verificação2) {
        window.location.assign("/terceiraParte.html");
        break;
    } else {
        alert ('Resposta incorreta');
        contador2--;
        resposta2 = prompt ('Digite sua resposta');
        window.location.assign ("/gameover.html");
    }
}
}    

var verificação3 = "b";
var contador3 = 3;
function third() {
    var resposta3 = prompt ('Digite sua resposta');
    while (contador3 >= 1) {  
    if (resposta3 == verificação3) {
        window.location.assign("/quartaParte.html");
        break;
    } else {
        alert ('Resposta incorreta');
        contador3--;
        resposta3 = prompt ('Digite sua resposta');
        window.location.assign("/gameover.html");
    }
}
}

var verificação4 = "c";
var contador4 = 3;
function resposta4() {
    var responder4 = prompt ('Digite sua resposta');
    while (contador4 >= 1) {
    if (responder4 == verificação4) {
        window.location.assign("/quintaParte.html");
        break;
    } else {
        alert ('Resposta incorreta');
        contador4--;
        responder4 = prompt ('Digite sua resposta');
        window.location.assign ("/gameover.html");
    }
}
}

var verificação5 = "c";
var contador5 = 3;
function pergunta5() {
    var resposta5 = prompt("Digite sua resposta")
    while (contador5 >= 1){  
    if (resposta5 == verificação5) {
        window.location.assign("/vitória.html")
        break;
    } else {
        alert ('Resposta incorreta');
        resposta5 = prompt ('Digite sua resposta');
        contador5--;
        window.location.assign("/gameover.html");
    }
}
} 