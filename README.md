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
| Logotipo | `asset/img/logo.svg` | https://unsplash.com/es/fotos/un-objeto-purpura-y-rosa-flotando-en-el-aire-Ep6f8t9fYA8 | BoliviaInteligente | Unsplash License |
| Galería 1 | `asset/img/iamgen1.webp` | https://pixabay.com/es/photos/fondo-de-navidad-nebula-de-ori%C3%B3n-11107/ | WikiImages | Pixabay Content License |
| Galería 2 | `asset/img/imagen2.webp` | https://pixabay.com/es/photos/nebulosa-laguna-messier-8-ngc-6523-11143/ | WikiImages | Pixabay Content License |
| Galería 3 | `asset/img/imagen3.webp` | https://pixabay.com/es/photos/estrellas-galaxia-espacio-67616/ | WikiImages | Pixabay Content License |
| Animación CTA | `asset/img/imagen_animada.webp` | Creación propia: fotogramas generados con Gemini Pro y retocados en Photoshop | Pablo Barrera | Términos de uso de Gemini |
| Vídeo | `asset/video/video (1).mp4` | https://www.pexels.com/es-es/video/impresionante-primer-plano-de-la-superficie-solar-llameante-32682534/ | Nicola Narracci | Pexels License |
| Poster del vídeo | `asset/img/poster.webp` | Fotograma extraído del vídeo anterior | Nicola Narracci | Pexels License |
| Audio ambiental | `asset/audio/untitled.mp3` | https://www.youtube.com/watch?v=Dtu5Fk1qb0g | SonidosKMD | Licencia de YouTube, uso académico |

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
| Eliminación de fondo del logotipo | [COMPLETAR: herramienta] |
| Vectorización del logotipo a SVG | [COMPLETAR: herramienta] |
| Generación de los fotogramas del CTA | Gemini Pro |
| Retoque de los fotogramas | Photoshop |
| Montaje de la animación en WebP animado | [COMPLETAR: herramienta] |
| Compresión y transcodificación del vídeo a H.264 | [COMPLETAR: herramienta] |
| Extracción del poster | [COMPLETAR: herramienta] |
| Recorte, fundidos y exportación del audio | [COMPLETAR: herramienta] |
| Control de versiones y publicación | Git, GitHub y GitHub Pages |

## Notas

- Los pesos se han medido sobre los archivos finales del repositorio.
- Todas las imágenes estáticas de `index.html` llevan `alt` descriptivo, `width`, `height` y `loading="lazy"`.
- El vídeo usa `poster="asset/img/poster.webp"`.