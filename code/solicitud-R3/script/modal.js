const imgVideo = document.getElementById("imgVideo")
const vistaGrande = document.getElementById("vistaGrande")
const video = document.getElementById("video");
const btnCerrar = document.getElementById("btnCerrar");
const btnX = document.getElementById("btnX");

//Funcion para abrir modal
imgVideo.addEventListener("click", function(){
    video.src = "https://www.youtube.com/embed/tRXOrsul_t8";
    vistaGrande.classList.toggle("activo");
    vistaGrande.classList.remove("oculto");        
})

//Funcion para cerrar modal
btnX.addEventListener("click", function(){
    video.src = "";
    vistaGrande.classList.remove("activo");
    vistaGrande.classList.toggle("oculto");
    video.classList.toggle("oculto");    
})   