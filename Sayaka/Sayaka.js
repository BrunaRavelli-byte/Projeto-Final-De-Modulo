var verificação = 'd';
var contador = 2;
function stage1() {
     var responder = prompt('Digite sua resposta');
     while (contador >= 1) {  
    if (responder == verificação) {
        window.location.assign ("./Fase 2.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador--;
        responder = prompt('Digite sua resposta');
        window.location.assign("../gameover.html");
    }
}
}


var verificação2 = 'd';
var contador1 = 2;
function stage2() {
     var responder2 = prompt('Digite sua resposta');
     while (contador1 >= 1) {  
    if (responder2 == verificação2) {
        window.location.assign ("../Sayaka/Stage 3.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador1--;
        responder2 = prompt('Digite sua resposta');
        window.location.assign("../gameover.html");
    }
}
}

var verificação3 = 'a';
var contador3 = 2;
function stage3() {
     var responder3 = prompt('Digite sua resposta');
     while (contador3 >= 1) {  
    if (responder3 == verificação3) {
        window.location.assign ("../vitória.html");
        break;
    } else { 
        alert ('Resposta incorreta');
        contador3--;
        responder3 = prompt('Digite sua resposta');
        window.location.assign("../gameover.html");
    }
}
}