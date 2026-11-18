// 1. Cogemos los elementos del HTML por su id
const visorImagen = document.getElementById("visor-imagen");
const visorEnlace = document.getElementById("visor-enlace");
const miniatura1 = document.getElementById("mini1");
const miniatura2 = document.getElementById("mini2");
const miniatura3 = document.getElementById("mini3");

// 2. Quita la clase "activa" de todas las miniaturas
function quitarActiva() {
  miniatura1.classList.remove("activa");
  miniatura2.classList.remove("activa");
  miniatura3.classList.remove("activa");
}

// 3. Cambia la imagen grande con un fundido
function cambiarImagen(boton, ruta, texto, enlace) {
  // Si ya está seleccionada, no hacemos nada
  if (boton.classList.contains("activa")) {
    return;
  }

  // Marcamos la miniatura pulsada
  quitarActiva();
  boton.classList.add("activa");

  // Ocultamos la imagen (el CSS hace el fundido)
  visorImagen.classList.add("oculta");

  // Esperamos 300 ms (lo que dura el fundido) y cambiamos la imagen
  setTimeout(function () {
    visorImagen.src = ruta;
    visorImagen.alt = texto;
    visorEnlace.href = enlace;
    visorImagen.classList.remove("oculta");
  }, 300);
}

// 4. Eventos de clic en cada miniatura
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