---
title: "Patrones de diseño: Abstract Factory"
subtitle: "Una extensión del Patrón Factory que permite la creación de familias de objetos relacionados."
date: "2023-12-7"
image: "https://i.imgur.com/RgHR2MR.png"
tags: ["design patterns"]
---

<text>
El desarrollo de software se beneficia de patrones de diseño probados para abordar problemas comunes. Uno de estos patrones fundamentales es la extensión del Patrón de Diseño Factory, conocida como el Patrón de Diseño Abstract Factory. Esta herramienta proporciona una forma de crear familias de objetos relacionados de manera eficiente y flexible.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón de Diseño Abstract Factory se sitúa en la categoría de patrones creacionales y se centra en la creación de familias de objetos relacionados sin especificar sus clases exactas. A diferencia del Patrón Factory, el Abstract Factory utiliza una interfaz común no solo para la creación de objetos individuales, sino para crear conjuntos completos de objetos relacionados. Esto agrega un nivel adicional de abstracción y flexibilidad al diseño del software.
</text>

<subtitle>
Estructura del Patrón:
</subtitle>

<text>
La estructura del Patrón Abstract Factory es similar al Patrón Factory pero con la adición de más capas para manejar familias de objetos.
</text>

<text>
1 - Interfaz o Clase Abstracta de Fábrica: Define la interfaz para la creación de objetos relacionados. Puede ser una clase abstracta o una interfaz.
</text>

<code language="javascript">
public interface FabricaAbstracta {
    ProductoA crearProductoA();
    ProductoB crearProductoB();
}
</code>

<text>
2 - Fábricas Concretas: Implementan la interfaz abstracta y son responsables de la creación real de conjuntos de objetos relacionados.
</text>

<code language="javascript">
public class FabricaConcreta1 implements FabricaAbstracta {
    public ProductoA crearProductoA() {
        return new ProductoA1();
    }

    public ProductoB crearProductoB() {
        return new ProductoB1();
    }
}

public class FabricaConcreta2 implements FabricaAbstracta {
    public ProductoA crearProductoA() {
        return new ProductoA2();
    }

    public ProductoB crearProductoB() {
        return new ProductoB2();
    }
}
</code>

<text>
3 - Interfaz ProductoA y ProductoB: Representan objetos de la familia que serán creados.
</text>

<code language="javascript">
public interface ProductoA {
    void operacionA();
}

public interface ProductoB {
    void operacionB();
}
</code>

<text>
4 - Productos Concretos A y B: Implementan las interfaces ProductoA y ProductoB, respectivamente.
</text>

<code language="javascript">
public class ProductoA1 implements ProductoA {
    public void operacionA() {
        // Implementación específica para ProductoA1
    }
}

public class ProductoB1 implements ProductoB {
    public void operacionB() {
        // Implementación específica para ProductoB1
    }
}

public class ProductoA2 implements ProductoA {
    public void operacionA() {
        // Implementación específica para ProductoA2
    }
}

public class ProductoB2 implements ProductoB {
    public void operacionB() {
        // Implementación específica para ProductoB2
    }
}
</code>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Abstract Factory:
</subtitle>

<text>
El Patrón Abstract Factory es especialmente útil cuando:
</text>

<list>
<item>
Se necesita crear familias de objetos relacionados: Cuando la creación de conjuntos de objetos que trabajan juntos es esencial.
</item>

<item>
La variedad de objetos a crear puede crecer y necesita ser gestionada: Si se anticipa que nuevas familias de objetos serán introducidas y se busca una forma sencilla de extender el sistema.
</item>

<item>
La creación de objetos debe ser independiente del sistema que los utiliza: Cuando se desea aislar la creación de objetos del código que los utiliza, permitiendo un bajo acoplamiento.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón de Diseño Abstract Factory amplía las capacidades del Patrón Factory, permitiendo la creación de familias de objetos relacionados de manera eficiente y flexible. Su implementación adecuada puede mejorar la modularidad, mantenibilidad y escalabilidad del código, proporcionando una solución elegante para situaciones donde la creación de conjuntos de objetos es esencial.
</text>