---
title: "CSS: Corazón pulsante"
subtitle: "Un corazón con una animación que simula el palpitar, hecho solo con CSS y HTML."
date: "2023-12-17"
image: "https://i.imgur.com/fPghYrG.png"
tags: ["css"]
---

<subtitle>
Código HTML
</subtitle>

<text>
Respecto al código HTML tan solo deberemos crear un elemento "div", solo eso. En mi caso utilizare la clase "heart" para darle los respectivos estilos en CSS.
</text>

<code language="html">
&lt;div class="heart"&gt;&lt;/div&gt;
</code>

<subtitle>
Código CSS
</subtitle>

<text>
Veamos la primera parte de CSS para nuestro corazón, en esta manipularemos nuestro div para darle los estilos que necesitamos para que se consiga el efecto esperado.
</text>

<text>
Lo que haremos será especificar su tamaño y color, así como también le daremos cierta luz de fondo para lograr un mejor efecto de profundidad a la hora de que el corazón use la animación de palpitar.
</text>

<code language="css">
.heart {
	height: 80px;
	width: 80px;
	background-color: rgb(221, 39, 124);
	position: relative;
	transform: rotate(45deg);
	box-shadow: -10px 10px 90px rgb(221, 39, 124);
	animation: heartAnim 1.05s linear infinite;
}
</code>

<subtitle>
Pseudo elementos
</subtitle>

<text>
Ahora toca darle forma a nuestro corazón, esto lo haremos utilizando los pseudoelementos before y after de nuestro div.
</text>

<text>
A estos le asignaremos el mismo color y tamaño que tiene nuestro div, y aprovechando una posición absoluta y posicionamiento podremos colocarlo en las zonas que necesitamos, por último, con un border radius nuestro corazón estará terminado.
</text>

<code language="css">
.heart::before {
	content: "";
	position: absolute;
	height: 80px;
	width: 80px;
	background-color: rgb(221, 39, 124);
	top: -40px;
	border-radius: 50px;
	box-shadow: -10px 10px 90px rgb(221, 39, 124);
}

.heart::after {
	content: "";
	position: absolute;
	height: 80px;
	width: 80px;
	background-color: rgb(221, 39, 124);
	right: -40px;
	border-radius: 50px;
	box-shadow: -10px 10px 90px rgb(221, 39, 124);
}
</code>


<subtitle>
Animación
</subtitle>

<text>
Por último veamos la animación para que nuestro efecto este completo, esta se basa en un simple transform que da la impresión de que nuestro corazón está "palpitando".
</text>

<code language="css">
@keyframes heartAnim {
	0% {
		transform: rotate(-45deg) scale(1.075);
	}
	70% {
		transform: rotate(-45deg) scale(1);
	}
	100% {
		transform: rotate(-45deg) scale(1.075);
	}
}
</code>

<subtitle>
CSS Completo
</subtitle>

<text>
Ahora veamos todo el archivo CSS que implementamos en caso de querer conseguir este efecto, así como también debajo tendrás un botón con el cual podrás ver un ejemplo de cómo este efecto se ve, para así decidir si hacerlo o no.
</text>

<code language="css">
.heart {
	height: 80px;
	width: 80px;
	background-color: rgb(221, 39, 124);
	position: relative;
	transform: rotate(45deg);
	box-shadow: -10px 10px 90px rgb(221, 39, 124);
	animation: heartAnim 1.05s linear infinite;
}

.heart::before {
	content: "";
	position: absolute;
	height: 80px;
	width: 80px;
	background-color: rgb(221, 39, 124);
	top: -40px;
	border-radius: 50px;
	box-shadow: -10px 10px 90px rgb(221, 39, 124);
}

.heart::after {
	content: "";
	position: absolute;
	height: 80px;
	width: 80px;
	background-color: rgb(221, 39, 124);
	right: -40px;
	border-radius: 50px;
	box-shadow: -10px 10px 90px rgb(221, 39, 124);
}

@keyframes heartAnim {
	0% {
		transform: rotate(-45deg) scale(1.075);
	}
	70% {
		transform: rotate(-45deg) scale(1);
	}
	100% {
		transform: rotate(-45deg) scale(1.075);
	}
}
</code>

<subtitle>
Conclusión
</subtitle>

<text>
En conclusión en este artículo aprendimos a crear un simple efecto con animación en CSS, en el cual aprovechamos los pseudo-elementos para lograr la forma de un corazón el cual luego simulamos que palpita con una animación que utiliza el atributo transform para brindar el efecto. Espero que este artículo le haya servido, y pueda implementar este efecto en su propio contexto.
</text>