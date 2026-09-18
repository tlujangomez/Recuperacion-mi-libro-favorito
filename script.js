let grande = true;

function cambiarTamanoTitulo(){

    let titulo = document.getElementById("titulo");

    if(grande){
        titulo.style.fontSize = "55px";
    }else{
        titulo.style.fontSize = "40px";
    }

    grande = !grande;

}

function toggleOpinion(){

    let opinion = document.getElementById("opinion");

    opinion.classList.toggle("oculto");

}