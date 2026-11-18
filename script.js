const visorImagen = document.getElementById("visor-imagen");
const visorEnlace = document.getElementById("visor-enlace");
const miniatura1 = document.getElementById("mini1");
const miniatura2 = document.getElementById("mini2");
const miniatura3 = document.getElementById("mini3");

function quitarActiva() {
  miniatura1.classList.remove("activa");
  miniatura2.classList.remove("activa");
  miniatura3.classList.remove("activa");
}

function cambiarImagen(boton, ruta, texto, enlace) {
  if (boton.classList.contains("activa")) {
    return;
  }

  quitarActiva();
  boton.classList.add("activa");

  visorImagen.classList.add("oculta");

  setTimeout(function () {
    visorImagen.src = ruta;
    visorImagen.alt = texto;
    visorEnlace.href = enlace;
    visorImagen.classList.remove("oculta");
  }, 300);
}

miniatura1.addEventListener("click", () => {
  cambiarImagen(
    miniatura1,
    "asset/img/imagen1.webp",
    "Nube de gas incandescente en tonos rojos, naranjas y amarillos",
    "https://pixabay.com/es/photos/fondo-de-navidad-nebula-de-ori%C3%B3n-11107/"
  );
});

miniatura2.addEventListener("click", () => {
  cambiarImagen(
    miniatura2,
    "asset/img/imagen2.webp",
    "Nebulosa de la Laguna, Messier 8, con nubes de gas y estrellas jóvenes",
    "https://pixabay.com/es/photos/nebulosa-laguna-messier-8-ngc-6523-11143/"
  );
});

miniatura3.addEventListener("click", () => {
  cambiarImagen(
    miniatura3,
    "asset/img/imagen3.webp",
    "Nebulosa luminosa en tonos violetas y rosas sobre un fondo espacial oscuro con estrellas",
    "https://pixabay.com/es/photos/estrellas-galaxia-espacio-67616/"
  );
});


const botonVerVideo = document.getElementById('boton-reel');
const modal = document.getElementById('modal-video');
const btnCerrarModal = document.getElementById('cerrar-modal');
const verVideo = document.getElementById('video-reel');


function abrirModal() {
  modal.showModal();
  verVideo.play().catch();
}

function cerrarModal() {
  modal.close();
}

botonVerVideo.addEventListener('click', abrirModal);
btnCerrarModal.addEventListener('click', cerrarModal);



modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    cerrarModal();
  }
});


