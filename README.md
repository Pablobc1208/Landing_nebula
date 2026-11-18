# Landing_nebula

# Landing de Nébula

Página de presentación de **Nébula**, artista digital ficticia especializada en paisajes de ciencia ficción. Proyecto académico del CFGS de Desarrollo de Aplicaciones Web (Ilerna).

- **Web publicada (GitHub Pages):** https://pablobc1208.github.io/Landing_nebula/
- **Repositorio:** https://github.com/Pablobc1208/Landing_nebula

## Estructura del proyecto

```
/
├── index.html
├── README.md
└── asset/
    ├── img/     (hero, logo, galería, animación CTA y poster)
    ├── audio/   (audio ambiental)
    └── video/   (vídeo de presentación)
```

## 1. Tabla de recursos y licencias

| Recurso | Archivo | URL original | Autor | Licencia |
|---|---|---|---|---|
| Hero | `asset/img/Hero_img.webp` | https://www.pexels.com/photo/spectacular-view-of-the-north-america-nebula-33654359/ | Ahmad Basem | Pexels License |
| Logotipo | SVG inline en `index.html` (original en `asset/img/logo.svg`) | https://unsplash.com/es/fotos/un-objeto-purpura-y-rosa-flotando-en-el-aire-Ep6f8t9fYA8 | BoliviaInteligente (obra derivada: Pablo Barrera) | Unsplash License |
| Galería 1 | `asset/img/imagen1.webp` | https://pixabay.com/es/photos/fondo-de-navidad-nebula-de-ori%C3%B3n-11107/ | WikiImages | Pixabay Content License |
| Galería 2 | `asset/img/imagen2.webp` | https://pixabay.com/es/photos/nebulosa-laguna-messier-8-ngc-6523-11143/ | WikiImages | Pixabay Content License |
| Galería 3 | `asset/img/imagen3.webp` | https://pixabay.com/es/photos/estrellas-galaxia-espacio-67616/ | WikiImages | Pixabay Content License |
| Animación CTA | `asset/img/imagen_animada.webp` | Creación propia: fotogramas generados con Gemini Pro y retocados en Photoshop | Pablo Barrera | Términos de uso de Gemini |
| Vídeo | `asset/video/video (1).mp4` | https://www.pexels.com/es-es/video/impresionante-primer-plano-de-la-superficie-solar-llameante-32682534/ | Nicola Narracci | Pexels License |
| Poster del vídeo | `asset/img/poster.webp` | Fotograma extraído del vídeo anterior | Nicola Narracci | Pexels License |
| Audio ambiental | `asset/audio/untitled.mp3` | https://www.youtube.com/watch?v=Dtu5Fk1qb0g | SonidosKMD | Licencia estándar de YouTube (ver apartado 9) |

### Recursos generados con IA

Los fotogramas de la animación CTA se generaron con **Gemini Pro** y se retocaron después en Photoshop. El montaje de la animación, fotograma a fotograma, es propio.

- **Herramienta:** Gemini Pro (Google)
- **Prompt utilizado:** [Generame 3 imagenes que iran asociada a un boton de contacto en movimiento con tematica del espacio y nebula, ten en cuenta con estos 3 frame se hara una imagen animada para el boton.]
- **Edición posterior:** retoque en Photoshop y montaje en WebP animado.

## 2. Justificación técnica de formatos

| Recurso | Formato | Peso final | Justificación |
|---|---|---|---|
| Hero | WebP, 1920x1080 | 62 KB | Comprime bastante más que JPG con calidad visual similar y conserva bien los degradados oscuros de la nebulosa. Queda muy por debajo del límite de 250 KB. |
| Logotipo | SVG | 30 KB | Es vectorial: se ve nítido a cualquier tamaño y en pantallas de alta densidad, admite transparencia de forma nativa y se puede recolorear con CSS. |
| Galería | WebP, 400x250 | 47, 57 y 25 KB | Miniaturas ligeras que aceleran la carga de la galería frente a JPG o PNG. |
| Animación CTA | WebP animado, 400x150, 3 fotogramas de 500 ms, bucle infinito | 32 KB | Pesa mucho menos que un GIF equivalente, admite transparencia parcial y colores de 24 bits (el GIF se limita a 256). |
| Vídeo | MP4 (H.264), 1920x1080, 10 s | 2,2 MB | H.264 se reproduce en todos los navegadores y dispositivos y comprime mucho mejor que formatos antiguos como AVI. Queda por debajo del límite de peso fijado. |
| Poster | WebP, 1280x720 | 75 KB | Imagen de precarga ligera que se muestra antes de reproducir el vídeo. |
| Audio | MP3, 192 kbps, 15 s | 353 KB | MP3 es compatible con todos los navegadores. 192 kbps es una tasa adecuada para música y sonido ambiental. Lleva fundido de entrada y de salida. |

## 3. Herramientas utilizadas

| Proceso | Herramienta |
|---|---|
| Redimensionado, recorte y conversión a WebP (hero, galería) | Squoosh |
| Eliminación de fondo del logotipo | Photoshop |
| Vectorización del logotipo a SVG | Photoshop|
| Generación de los fotogramas del CTA | Gemini Pro |
| Retoque de los fotogramas | Photoshop |
| Montaje de la animación en WebP animado | Photoshop y EzGif |
| Compresión y transcodificación del vídeo a H.264 | SonyVegas |
| Extracción del poster | SonyVega |
| Recorte, fundidos y exportación del audio | Audacity |
| Control de versiones y publicación | Git, GitHub y GitHub Pages |

## Notas

- Los pesos se han medido sobre los archivos finales del repositorio.
- Todas las imágenes estáticas de `index.html` llevan `alt` descriptivo, `width`, `height` y `loading="lazy"`.
- El vídeo usa `poster="asset/img/poster.webp"`.

## 4. Logotipo en SVG inline

El logo va como **SVG inline** dentro del HTML en vez de con `<img>`. Ventajas:

- Forma parte del DOM, así que su `fill` y su `stroke` se cambian con CSS (variables `--logo-color`, `--logo-hover`, `--logo-borde`).
- Reacciona a `:hover` y `:focus-visible` con `transition`.
- Es vectorial: se ve nítido a cualquier tamaño.
- Es una petición HTTP menos.

## 5. Galería dinámica

Hecha con JavaScript puro: `getElementById` y `addEventListener('click')` en cada miniatura. La función `cambiarImagen()` marca la miniatura activa con `classList`, desvanece la imagen principal con la clase `oculta` y cambia `src`, `alt` y el enlace de la atribución.

## 6. Modal de vídeo

El botón "Ver Reel de Animación" abre un `<dialog>` con `showModal()` y reproduce el vídeo con **`.play()`**. Al cerrarlo (con el botón ✕, haciendo clic fuera o con Esc) se lanza el evento `close`, que hace **`.pause()`** y vuelve el vídeo al segundo 0.

## 7. Reproductor de audio

El `<audio>` no lleva `controls`. Dos botones propios lo controlan con la API HTMLMediaElement:

- "Escuchar ambiente espacial" usa `.paused`, `.play()` y `.pause()`.
- "Silenciar" usa `.muted`.

## 8. Feedback visual

Todos los elementos interactivos tienen `:hover`, `:focus-visible` y `transition`. Solo se animan `transform` (`scale`, `translate`) y `opacity` para que las animaciones vayan a 60 fps. El modal aparece con `@keyframes`.

## 9. Licencia del proyecto

El proyecto se publica con **CC BY-NC 4.0**: se puede reutilizar citando al autor, pero no con fines comerciales. Cubre solo mi trabajo (código, diseño, textos y logo vectorizado). Los recursos de terceros mantienen su licencia (ver `credits.html`).

**Compatibilidad:** las licencias de Pexels, Pixabay y Unsplash permiten usar y modificar los recursos gratis y no obligan a que mi proyecto tenga su misma licencia, así que son compatibles con CC BY-NC. El audio de YouTube es la excepción: su licencia estándar no permite reutilizarlo, así que para publicar la web habría que cambiarlo por uno con licencia libre.

**¿Y si un recurso fuera CC BY-SA?** Habría que citar al autor y, si lo modifico, publicar la obra derivada con la **misma licencia CC BY-SA**. Por ejemplo, si la imagen del logo fuera CC BY-SA, mi logo vectorizado no podría ser CC BY-NC, porque CompartirIgual no permite añadir la restricción NoComercial. Habría que cambiar la licencia a CC BY-SA o sustituir el recurso.

## 10. Verificación cross-browser y responsive

| Funcionalidad | Chrome | Firefox | Edge |
|---|---|---|---|
| Logo SVG (hover/focus) | ⬜ | ⬜ | ⬜ |
| Galería | ⬜ | ⬜ | ⬜ |
| Modal de vídeo (play al abrir / pause al cerrar) | ⬜ | ⬜ | ⬜ |
| Audio (play, pause, silenciar) | ⬜ | ⬜ | ⬜ |
| Consola sin errores | ⬜ | ⬜ | ⬜ |

**Modo dispositivo (DevTools):** probado en móvil (375 px) y tablet (768 px). Todos los botones miden como mínimo 44x44 px. ⬜