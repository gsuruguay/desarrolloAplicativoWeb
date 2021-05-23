const imgVideo = document.getElementById("imgVideo")
const vistaGrande = document.getElementById("vistaGrande")
const video = document.getElementById("video");
const btnX = document.getElementById("btnX");

//Evento click para abrir modal con video
imgVideo.addEventListener("click", function(){
    video.src = "https://www.youtube.com/embed/tRXOrsul_t8";
    vistaGrande.classList.toggle("activo");
    vistaGrande.classList.remove("oculto");        
})

//Evento click para cerrar modal con video
btnX.addEventListener("click", function(){
    video.src = "";
    vistaGrande.classList.remove("activo");
    vistaGrande.classList.toggle("oculto");
})   