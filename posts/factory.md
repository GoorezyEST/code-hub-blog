---
title: "Patrones de diseño: Factory"
subtitle: "Un patrón de diseño que nos permite encapsular la creación de objetos."
date: "2023-12-6"
image: "https://i.imgur.com/xi7FpFO.png"
tags: ["design patterns"]
---

<text>
El mundo del desarrollo de software se nutre de diversos patrones de diseño que actúan como soluciones probadas para problemas comunes. Uno de estos patrones fundamentales es el Patrón de Diseño Factory, una herramienta que facilita la creación de objetos de manera eficiente y flexible.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón de Diseño Factory, perteneciente a la categoría de patrones creacionales, se enfoca en la creación de objetos sin especificar la clase exacta del objeto que se creará. En lugar de utilizar un constructor directo, el patrón Factory utiliza una interfaz común para crear objetos, permitiendo que las subclases alteren el tipo de objetos que se crearán. Esto proporciona un nivel adicional de abstracción y flexibilidad al diseño del software.
</text>

<subtitle>
Estructura del Patrón:
</subtitle>

<text>
El Patrón Factory se compone principalmente de dos elementos clave: la interfaz o clase abstracta y las clases concretas.
</text>

<text>
1 - Interfaz o Clase Abstracta: Define la interfaz para la creación del objeto, pero no implementa la creación en sí misma. Esto puede ser una clase abstracta o una interfaz.
</text>

<code language="javascript">
public interface Fabrica {
    Producto crearProducto();
}
</code>

<text>
2 - Clases Concretas: Implementan la interfaz y son responsables de la creación real de los objetos.
</text>

<code language="javascript">
public class FabricaConcretaA implements Fabrica {
    public Producto crearProducto() {
        return new ProductoA();
    }
}

public class FabricaConcretaB implements Fabrica {
    public Producto crearProducto() {
        return new ProductoB();
    }
}
</code>

<text>
3 - Producto: Representa el objeto que se creará.
</text>

<code language="javascript">
public interface Producto {
    void operacion();
}
</code>

<text>
4 - Productos Concretos: Son las implementaciones específicas de la interfaz Producto.
</text>

<code language="javascript">
public class ProductoA implements Producto {
    public void operacion() {
        // Implementación específica para ProductoA
    }
}

public class ProductoB implements Producto {
    public void operacion() {
        // Implementación específica para ProductoB
    }
}
</code>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Factory:
</subtitle>

<text>
El Patrón Factory es especialmente útil en situaciones donde:
</text>

<list>
<item>
La creación de un objeto es compleja: Si la creación de un objeto implica una lógica compleja o la combinación de varios componentes, el Patrón Factory puede ayudar a encapsular esa complejidad.
</item>

<item>
Se necesita una interfaz común para la creación: Cuando se quiere proporcionar una interfaz única para la creación de objetos sin exponer las complejidades de la implementación real.
</item>

<item>
La creación de objetos debe ser flexible y extensible: Si se espera que la variedad de objetos a crear crezca y se necesite una manera sencilla de agregar nuevas implementaciones.
</item>

<item>
La creación de objetos puede cambiar con el tiempo: Cuando la lógica de creación de objetos es propensa a cambios, el Patrón Factory permite modificar las clases concretas sin afectar al resto del sistema.
</item>
</list>

<subtitle>
Conclusión
</subtitle>

<text>
En resumen, el Patrón de Diseño Factory es una herramienta valiosa para simplificar la creación de objetos, proporcionando una interfaz común y permitiendo una mayor flexibilidad en la gestión de las clases concretas. Su aplicación adecuada puede mejorar la modularidad, mantenibilidad y escalabilidad del código.
</text>