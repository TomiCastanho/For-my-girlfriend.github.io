const abrirModal = document.querySelector(".boton-neon");
const modal = document.querySelector(".modal");
const cerrarModal = document.querySelector(".boton__no");
const abrirMensaje = document.querySelector(".boton__si");

abrirModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.add("modal--show")
});

cerrarModal.addEventListener("click",(e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show")
});


function alert() {
    swal({
        title: "¡Te amo muchisimo!",
        button: "¡Yo tambien!"
        
      });
}

abrirMensaje.addEventListener("click",alert);






 

