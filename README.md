# Recuperacion-mi-libro-favorito

# MANUAL TÉCNICO

## Proyecto: Mi Libro Favorito

**Nombre:** Tomas Luján Gómez

**Grado:** 11°3

**Proyecto:** Mi Libro Favorito

**Libro:** Nunca te pares

**Autor del libro:** Phil Knight

**Repositorio de GitHub:** https://github.com/tlujangomez/Recuperacion-mi-libro-favorito-/tree/main/recuperacion

**Página en Vercel:** https://recuperacion-mi-libro-favorito-ijyb.vercel.app

**Fecha:** 2026

---

# Descripción general

Para este proyecto decidí escoger el libro *Nunca te pares* de Phil Knight porque me gusta aprender sobre emprendimiento y negocios. Desde hace un tiempo me llama la atención cómo nacen las grandes empresas y cómo logran crecer, por eso este libro me pareció una buena opción.

En la página web quise mostrar la información más importante del libro de una forma sencilla. Agregué el título, el autor, la portada, una pequeña sinopsis y una opinión personal sobre lo que me dejó este libro. También añadí dos botones con JavaScript para que la página fuera un poco más interactiva y no fuera solamente información escrita.

Mi idea fue hacer una página limpia, fácil de entender y con colores que recordaran un poco a Nike, ya que el libro cuenta la historia de su fundador.

---

# Arquitectura de archivos

Para desarrollar el proyecto utilicé cuatro archivos.

## index.html

En este archivo está toda la estructura de la página. Aquí agregué el encabezado, la imagen del libro, la sinopsis, la opinión personal, los botones y el pie de página.

También enlacé el archivo CSS y el archivo JavaScript para que la página tuviera diseño y funciones.

```html
<link rel="stylesheet" href="styles.css">
```

Con esta línea conecté el archivo donde están todos los estilos.

También agregué:

```html
<script src="script.js"></script>
```

Con esta línea pude conectar el archivo de JavaScript para que los botones funcionaran correctamente.

---

## styles.css

En este archivo escribí prácticamente todo el diseño de la página.

Aquí cambié los colores, el tamaño de las imágenes, el estilo de los botones, el fondo, las sombras y la forma en que se acomodan los elementos.

Separar el diseño del HTML hace que el código quede más organizado y sea más fácil hacer cambios en el futuro.

---

## script.js

En este archivo programé las dos funciones que pedía el proyecto.

La primera cambia el tamaño del título cuando el usuario hace clic en el botón.

La segunda muestra y oculta mi opinión utilizando una clase de CSS.

Gracias a JavaScript la página deja de ser estática y el usuario puede interactuar con ella.