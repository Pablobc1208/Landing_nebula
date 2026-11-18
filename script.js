// 1. GALERÍA DE IMÁGENES
// Elementos del visor y miniaturas
const visorImagen = document.getElementById("visor-imagen");
const visorEnlace = document.getElementById("visor-enlace");
const miniatura1 = document.getElementById("mini1");
const miniatura2 = document.getElementById("mini2");
const miniatura3 = document.getElementById("mini3");

// Quita la clase activa de todas las miniaturas
function quitarActiva() {
  miniatura1.classList.remove("activa");
  miniatura2.classList.remove("activa");
  miniatura3.classList.remove("activa");
}

// Cambia la imagen principal con efecto de transición
function cambiarImagen(boton, ruta, texto, enlace) {
  if (boton.classList.contains("activa")) {
    return;
  }

  quitarActiva();
  boton.classList.add("activa");

  visorImagen.classList.add("oculta");

  // Espera 300ms (tiempo de la animación) para cambiar los datos y volver a mostrarla
  setTimeout(function () {
    visorImagen.src = ruta;
    visorImagen.alt = texto;
    visorEnlace.href = enlace;
    visorImagen.classList.remove("oculta"); // Quita la clase para que reaparezca suavemente
  }, 300);
}

// Clics en cada miniatura para cambiar la imagen
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


// 2. MODAL DE VÍDEO

// Elementos del modal y reproductor de vídeo
const botonVerVideo = document.getElementById('boton-reel');
const modal = document.getElementById('modal-video');
const btnCerrarModal = document.getElementById('cerrar-modal');
const verVideo = document.getElementById('video-reel');

// Abre el modal y reproduce el vídeo
function abrirModal() {
  modal.showModal();
  verVideo.play().catch();
}

// Cierra el modal
function cerrarModal() {
  modal.close();
}

// Eventos para abrir y cerrar el modal
botonVerVideo.addEventListener('click', abrirModal);
btnCerrarModal.addEventListener('click', cerrarModal);

// Cierra el modal al hacer clic en el fondo oscuro
modal.addEventListener("click", (evento) => {
  if (evento.target === modal) {
    cerrarModal();
  }
});


// 3. CONTROL DE AUDIO

// Elementos del audio y sus botones
const audio = document.getElementById('audio-ambiente');
const botonAudio = document.getElementById('boton-audio');
const botonSilencio = document.getElementById('boton-silencio');

// Reproduce o pausa el audio de fondo
function reproducirPausar() {
  if (audio.paused) {
    audio.play();
    botonAudio.textContent = 'Pausar ambiente espacial';
    botonAudio.classList.add('sonando');
  } else {
    audio.pause();
    botonAudio.textContent = 'Escuchar ambiente espacial';
    botonAudio.classList.remove('sonando');
  }
}

// Silencia o activa el sonido
function silenciar() {
  audio.muted = !audio.muted;

  if (audio.muted) {
    botonSilencio.textContent = 'Activar sonido';
    botonSilencio.classList.add('silenciado');
  } else {
    botonSilencio.textContent = 'Silenciar';
    botonSilencio.classList.remove('silenciado');
  }
}

// Eventos de clic para controlar el audio
botonAudio.addEventListener('click', reproducirPausar);
botonSilencio.addEventListener('click', silenciar);