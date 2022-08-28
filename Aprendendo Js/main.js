function trocarElemento(){
    document.getElementById("elementoVazio2").innerHTML = "Fui modificado por uma funcao"
    document.getElementById("elementoVazio2").style.display = "block";
}
function trocarCor(){
    document.getElementById("corModificavel").style.backgroundColor= "red";
    document.getElementById("elementoVazio3").innerHTML = "Essa cor é mais legal!"
    document.getElementById("elementoVazio3").style.display = "block";

}
function apagarElemento(){
    document.getElementById("elementoVazio3").style.display = "none";
    document.getElementById("elementoVazio2").style.display = "none";
    document.getElementById("elementoVazio").style.display = "none";
    document.getElementById("corModificavel").style.backgroundColor= "rgb(236, 233, 233)";

}

function outputWrite(){
    document.write("Estou sobrescrevendo a pagina");
}
function windowAlert(){
    window.alert("Sou um alerta ('-_-')" );
}
function consoleLog(){
    console.log("Sou uma mensagem enviada pelo botão console!" );
    window.alert("Aperte f12 e va em console!" );
    
}
