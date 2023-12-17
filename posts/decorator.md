---
title: "Patrones de diseño: Decorator"
subtitle: "Un patrón que permite agregar funcionalidades a objetos existentes dinámicamente y de manera flexible."
date: "2023-12-16"
image: "https://i.imgur.com/4Op5VwO.png"
tags: ["design patterns"]
---

<text>
Dentro del repertorio de patrones de diseño, el Patrón Decorator destaca como una solución flexible para agregar funcionalidades a objetos existentes sin modificar su estructura básica. Esta capacidad de extensión dinámica hace que el Decorator sea ideal para situaciones donde la herencia puede no ser la mejor opción.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón Decorator, clasificado como un patrón estructural, se enfoca en la extensión de funcionalidades de objetos de manera dinámica y flexible. En lugar de utilizar la herencia para agregar funcionalidades, el Decorator utiliza composición, permitiendo que los objetos se envuelvan en capas de decoradores que proporcionan funcionalidades adicionales.
</text>

<subtitle>
Implementación del Patrón:
</subtitle>

<text>
La implementación típica del Patrón Decorator involucra la creación de una interfaz común para los componentes y la implementación de clases concretas para los componentes base y los decoradores. Cada decorador envuelve a otro componente, permitiendo la construcción de pilas de decoradores.
</text>

<code language="javascript">
public interface Componente {
    void operacion();
}

public class ComponenteConcreto implements Componente {
    public void operacion() {
        // Implementación del componente base
    }
}

public abstract class Decorador implements Componente {
    private Componente componente;

    public Decorador(Componente componente) {
        this.componente = componente;
    }

    public void operacion() {
        componente.operacion();
    }
}

public class DecoradorConcretoA extends Decorador {
    public DecoradorConcretoA(Componente componente) {
        super(componente);
    }

    public void operacion() {
        super.operacion();
        // Funcionalidad adicional proporcionada por el decorador
    }
}

public class DecoradorConcretoB extends Decorador {
    public DecoradorConcretoB(Componente componente) {
        super(componente);
    }

    public void operacion() {
        super.operacion();
        // Otra funcionalidad adicional proporcionada por otro decorador
    }
</code>

<text>
En este ejemplo, Componente es la interfaz común, ComponenteConcreto es la implementación base, y Decorador y sus subclases (DecoradorConcretoA y DecoradorConcretoB) son los decoradores que envuelven a los componentes.
</text>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Decorator:
</subtitle>

<text>
El Patrón Decorator es apropiado cuando:
</text>

<list>
<item>
Se necesita agregar funcionalidades a objetos de manera dinámica y flexible: El Decorator permite combinar diferentes funcionalidades de manera modular.
</item>

<item>
La herencia puede volverse compleja o poco práctica: Si una clase tiene muchas combinaciones posibles de funcionalidades, la herencia múltiple puede volverse confusa, y el Decorator proporciona una alternativa más flexible.
</item>

<item>
Se busca evitar la modificación directa de clases existentes: Si se desea evitar modificar clases existentes pero aún se quiere extender su funcionalidad, el Decorator es una solución elegante.
</item>
</list>

<subtitle>
Consideraciones Importantes:
</subtitle>

<text>
Al utilizar el Patrón Decorator, se deben tener en cuenta algunas consideraciones:
</text>

<list>
<item>
Orden de Aplicación: El orden en que se aplican los decoradores puede afectar el resultado final, especialmente si hay dependencias entre las funcionalidades agregadas.
</item>

<item>
Composición y Descomposición: El Decorator permite la composición dinámica de funcionalidades, pero también es importante poder descomponer y entender las funcionalidades agregadas.
</item>

<item>
Costo de Creación: Puede haber un costo asociado con la creación y la gestión de múltiples capas de decoradores. Este aspecto debe considerarse en situaciones sensibles al rendimiento.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón Decorator ofrece una forma flexible y dinámica de agregar funcionalidades a objetos existentes sin modificar su estructura. Su aplicación adecuada puede mejorar la modularidad y la flexibilidad en el diseño de software.
</text>