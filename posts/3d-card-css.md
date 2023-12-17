---
title: "CSS: Carta 3D"
subtitle: "Un efecto on hover que dará la sensación al usuario de que la carta se mueve en espacio tridimensional."
date: "2023-12-18"
image: "https://i.imgur.com/9HygNgB.png"
tags: ["css"]
---

<subtitle>
Código HTML
</subtitle>

<text>
Empecemos con el código HTML, este se basa en el contenedor principal (container) el cual cumple la función de contener dentro de él todo el contenido del efecto.
</text>

<text>
Por otro lado tenemos el contenedor en el que implementaremos el efecto, el cual es un &lt;div&gt; que contiene dentro 9 &lt;span&gt;, cada uno de ellos ocupará un 33% del espacio total del contenedor, permitiendo así que dependiendo en que span se haga hover la carta genere un efecto de perspectiva 3D inclinándose hacia el lado en donde el cursor está posicionado.
</text>

<text>
Por último un &lt;div&gt; el cual brindará los estilos que se quieran aplicar a el contenedor como también si así lo desea un contenido dentro de él, en este caso será un simple texto con el nombre del efecto.
</text>

<code language="html">
&lt;section className='container'&gt;
 &lt;div class='card'&gt;
  &lt;div class='card-box-wrap'&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;span class='over'&gt;&lt;/span&gt;
    &lt;div class='card-box'&gt;
     &lt;strong&gt;
     3D Card
     &lt;br /&gt;
     Hover Effect
     &lt;/strong&gt;
     &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;/section&gt;
</code>

<subtitle>
Código CSS
</subtitle>

<text>
A continuación veremos la explicación del código CSS, iremos por parte para poder abordarlo correctamente y brindar claridad sobre la funcionalidad de cada estilo.
</text>

<text>
Primero tendremos el container, el cual permitirá un buen posicionamiento de el contenedor del efecto, además utilizaremos la clase card-box-wrap para indicar el tamaño, duracion de transición y agregar la perspectiva que brindará más calidad al efecto.
</text>

<text>
Por otro lado veamos el estilo de card-box, en este fijamos la altura y ancho para que cubra todo el contendor, y le agregamos los estilos deseados que posea el anteriormente mencionado, por ejemplo el background-image para brindar un fondo con textura. No olvides aplicar el preserve-3d en este estilo.
</text>

<code language="css">
.container {
  height: 100vh;
  background: radial-gradient(rgb(35, 35, 35), rgb(0, 0, 0));
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-box-wrap {
  width: 300px;
  height: 400px;
  position: relative;
  transition: all 0.6s ease-out;
  border-radius: 1rem;
  perspective: 1000px;
}
.card-box-wrap:hover {
  transition: all 0.3s linear;
  transform: scale(1.05);
}
.card-box {
  width: 100%;
  height: 100%;
  background-image: url(url-here);
  background-position: center;
  border-radius: 1rem;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  transition: all 0.6s ease-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
}
.card-box strong {
  transform: translateZ(40px);
  background: radial-gradient(rgb(35, 35, 35), rgb(0, 0, 0));
  padding: 0.75rem;
  border-radius: 1rem;
  color: rgb(255, 255, 255);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</code>

<subtitle>
Efecto on hover
</subtitle>

<text>
Ahora veamos la parte más interesante, la que permite conseguir nuestro efecto que son los estilos de over.
</text>

<text>
Cada span, como mencionamos anteriormente ocupará un 33% del contenedor, y así cada uno ocupará una parte del contenedor de forma equitativa. Luego aprovechando nth-child, posicionamos cada uno en la posición deseada, utilizando los atributos top y left.
</text>

<text>
Luego el efecto como tal a través del hover sobre cada over se logrará con un transform indicando hacia donde se debe inclinar la carta, y así consiguiendo el efecto de perspectiva en 3D.
</text>

<code language="css">
.over {
  width: 33.333%;
  height: 33.333%;
  position: absolute;
  z-index: 1;
}

.over:nth-child(1) {
  left: 0;
  top: 0;
}

.over:nth-child(2) {
  left: 33.333%;
  top: 0;
}

.over:nth-child(3) {
  left: 66.666%;
  top: 0;
}

.over:nth-child(4) {
  left: 0;
  top: 33.333%;
}

.over:nth-child(5) {
  left: 33.333%;
  top: 33.333%;
}

.over:nth-child(6) {
  left: 66.666%;
  top: 33.333%;
}

.over:nth-child(7) {
  left: 0;
  top: 66.666%;
}

.over:nth-child(8) {
  left: 33.333%;
  top: 66.666%;
}

.over:nth-child(9) {
  left: 66.666%;
  top: 66.666%;
}

.over:nth-child(1):hover ~ .card-box {
  transform: rotateX(-20deg) rotateY(20deg);
}

.over:nth-child(2):hover ~ .card-box {
  transform: rotateX(-20deg) rotateY(0deg);
}

.over:nth-child(3):hover ~ .card-box {
  transform: rotateX(-20deg) rotateY(-20deg);
}

.over:nth-child(4):hover ~ .card-box {
  transform: rotateX(0deg) rotateY(20deg);
}
.over:nth-child(5):hover ~ .card-box {
  transform: rotateX(0deg) rotateY(0deg);
}

.over:nth-child(6):hover ~ .card-box {
  transform: rotateX(0deg) rotateY(-20deg);
}

.over:nth-child(7):hover ~ .card-box {
  transform: rotateX(20deg) rotateY(20deg);
}

.over:nth-child(8):hover ~ .card-box {
  transform: rotateX(20deg) rotateY(0deg);
}

.over:nth-child(9):hover ~ .card-box {
transform: rotateX(20deg) rotateY(-20deg);
}
</code>


<subtitle>
Conclusión
</subtitle>

<text>
En resumen, en este artículo hemos aprendido cómo crear un efecto 3D sobre un contenedor al pasar el cursor por encima de él utilizando solo HTML y CSS.
</text>

<text>
Hemos visto cómo utilizar el contenedor principal para contener todo el contenido del efecto, el uso de la perspectiva y transformaciones para lograr el efecto deseado.
</text>

<text>
Este efecto es una excelente forma de añadir interacción y dinamismo a tu sitio web y espero que este tutorial haya sido útil en tu aprendizaje.
</text>