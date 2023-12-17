---
title: "CSS: Slide text"
subtitle: "Un efecto on hover que nos permite dar un fondo que se desliza detras de un texto utilizando solo CSS."
date: "2023-12-20"  
image: "https://i.imgur.com/xvHswk3.png"
tags: ["css"]
---

<text>
En este tutorial, exploraremos cómo implementar el efecto "CSS: Slide text": un color de respaldo que se desliza detrás del texto. Este efecto proporciona una transición suave y atractiva. A continuación, desglosaremos paso a paso cómo lograr este efecto utilizando HTML y CSS.
</text>

<subtitle>
Código HTML
</subtitle>

<text>
Comencemos estableciendo la estructura HTML básica para nuestro proyecto. Creamos un documento HTML con un contenedor principal (text_container) y un área de texto (middle, text_backupcolor, text).
</text>

<code language="html">
 &lt;section class="text_container"&gt;
    &lt;div class="middle"&gt;
      &lt;span class="text_backupcolor"&gt;
        &lt;div class="text" data-text="TEXT"&gt;
          TEXT
        &lt;/div&gt;
      &lt;/span&gt;
    &lt;/div&gt;
 &lt;/section&gt;
</code>

<subtitle>
Código CSS
</subtitle>

<text>
Ahora, profundicemos en los estilos CSS que proporcionan la apariencia y el efecto. Este código crea un efecto visual interesante al hacer hover sobre el contenedor de texto, revelando un fondo de respaldo de color diferente y expandiendo el texto de manera suave.
</text>

<code language="css">
.text_container {
  height: 100vh;
  background-color: rgb(15, 15, 15);
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text_backupcolor {
  position: relative;
  display: inline-block;
  padding: 0 40px;
  cursor: default;
}

.text {
  font-size: 6rem;
  text-transform: uppercase;
  font-weight: 900;
  position: relative;
  color: rgb(220, 220, 220);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text::before {
  content: attr(data-text);
  position: absolute;
  color: rgb(220, 220, 220);
  width: 0;
  overflow: hidden;
  transition: 0.6s;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text_backupcolor::before {
  content: "";
  width: 0%;
  height: 100%;
  position: absolute;
  background: rgb(35, 35, 35);
  right: 0;
  top: 0;
  transition: 0.6s;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.text_backupcolor:hover .text::before,
.text_backupcolor:hover::before {
  width: 100%;
}
</code>

<subtitle>
Conclusión
</subtitle>

<text>
¡Con estos pasos, has creado con éxito la animación "CSS: Slide text"! Personaliza los colores y los tiempos del efecto según tus preferencias para lograr resultados únicos. 
</text>
