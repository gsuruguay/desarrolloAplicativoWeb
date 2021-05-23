const thumbnail = document.getElementById("thumbnail")
const modal = document.getElementById("modal")
const video = document.getElementById("video");
const btnX = document.getElementById("btnX");

//Evento click sobre thumbnail para abrir modal con vista grande de video
thumbnail.addEventListener("click", function(){
    video.src = "https://www.youtube.com/embed/tRXOrsul_t8";
    modal.classList.toggle("activo");
    modal.classList.remove("oculto");        
})

//Evento click en boton X para cerrar modal con video.
btnX.addEventListener("click", function(){
    video.src = "";
    modal.classList.toggle("oculto");
    modal.classList.remove("activo");
})   