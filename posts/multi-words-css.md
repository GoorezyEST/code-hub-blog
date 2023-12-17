---
title: "CSS: Palabras"
subtitle: "Esta animación combina colores vibrantes con un movimiento suave y repetitivo, logrando un efecto visual llamativo."
date: "2023-12-19"
image: "https://i.imgur.com/EOHSVcB.png"
tags: ["css"]
---

<subtitle>
Código HTML
</subtitle>

<text>
Comencemos estableciendo la estructura HTML básica para nuestro proyecto. Creamos un documento HTML con un contenedor principal (multi_container), un área de contenido (multi_content), y un conjunto de palabras animadas (wordAnim, gal-one, gal-two, gal-three).
</text>

<code language="html">
&lt;section class="multi_container"&gt;
    &lt;div class="multi_content"&gt;
      &lt;p&gt;CSS&lt;/p&gt;
      &lt;div class="multi_words"&gt;
        &lt;span class="wordAnim"&gt;Gallery&lt;/span&gt;
        &lt;span class="gal-one wordAnim"&gt;Gallery&lt;/span&gt;
        &lt;span class="gal-two wordAnim"&gt;Gallery&lt;/span&gt;
        &lt;span class="gal-three wordAnim"&gt;Gallery&lt;/span&gt;
        &lt;span class="wordAnim"&gt;Gallery&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;
</code>

<subtitle>
Código CSS
</subtitle>

<text>
Ahora, profundicemos en los estilos CSS que proporcionan la apariencia estática del elemento antes de la animación.
</text>

<code language="css">
.multi_container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(230, 230, 230);
}

.multi_content {
  box-sizing: content-box;
  background-color: rgb(240, 240, 240);
  height: 35px;
  padding: 1.25rem 1.25rem;
  display: flex;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.25);
  font-size: 1.75rem;
  font-weight: 600;
  color: rgb(60, 60, 60);
  border-radius: 0.25rem;
}

.multi_words {
  overflow: hidden;
}

.gal-one {
  color: #f64f59;
}
.gal-two {
  color: #c471ed;
}
.gal-three {
  color: #12c2e9;
}

.wordAnim {
  display: block;
  height: 100%;
  padding-left: 0.5rem;
  animation: words 6.5s infinite;
}
</code>

<text>
Aquí definimos el diseño del contenedor, el área de contenido y las clases que afectan el color del texto (gal-one, gal-two, gal-three). Además, establecemos las propiedades de fuente y sombras para darle estilo al componente.
</text>

<subtitle>
Animación
</subtitle>

<text>
La parte más emocionante es la animación en sí misma. Utilizamos @keyframes para crear la animación llamada words. Esta animación produce un efecto de desplazamiento vertical continuo y cíclico de las palabras.
</text>

<code language="css">
@keyframes words {
  10%, 100% {
    transform: translateY(-400%);
  }
  25%, 75% {
    transform: translateY(-300%);
  }
  35%, 60% {
    transform: translateY(-212%);
  }
  50% {
    transform: translateY(-200%);
  }
}
</code>

<text>
Aquí, hemos definido varios puntos clave (10%, 25%, 35%, 50%, 60%, 75%, 85%, 100%) a lo largo de la animación. Cada punto representa un estado de transformación (translateY) en el eje Y, creando el efecto de movimiento vertical de las palabras.
</text>

<subtitle>
Conclusión
</subtitle>

<text>
¡Con estos pasos, has creado con éxito la animación "CSS: Multiwords"! Personaliza los colores y los tiempos de la animación según tus preferencias para lograr resultados únicos. 
</text>
