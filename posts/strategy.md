---
title: "Patrones de diseño: Strategy"
subtitle: "Un patrón que define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Permite que el cliente varíe independientemente de los algoritmos que utiliza."
date: "2023-12-15"
image: "https://i.imgur.com/Bbow9u3.png"
tags: ["design patterns"]
---

<text>
En el fascinante mundo de la programación, el Patrón Strategy brilla como una solución que define una familia de algoritmos, encapsula cada uno de ellos y los hace intercambiables. Este enfoque permite que el cliente varíe independientemente de los algoritmos que utiliza, brindando flexibilidad y extensibilidad al diseño del sistema.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón Strategy, clasificado como un patrón de comportamiento, se enfoca en definir una familia de algoritmos, encapsular cada uno de ellos en clases separadas y hacer que sean intercambiables. Esto permite que el cliente elija dinámicamente el algoritmo que debe utilizar en tiempo de ejecución.
</text>

<subtitle>
Implementación del Patrón:
</subtitle>

<text>
La implementación típica del Patrón Strategy implica la creación de una interfaz común para los algoritmos y la implementación de clases concretas que representan cada algoritmo. El contexto utiliza esta interfaz para cambiar dinámicamente el algoritmo que está utilizando.
</text>

<code language="javascript">
// Interfaz para los algoritmos
public interface Estrategia {
    void ejecutarAlgoritmo();
}

// Clases concretas que implementan la interfaz
public class EstrategiaConcretaA implements Estrategia {
    public void ejecutarAlgoritmo() {
        // Implementación del algoritmo A
    }
}

public class EstrategiaConcretaB implements Estrategia {
    public void ejecutarAlgoritmo() {
        // Implementación del algoritmo B
    }
}

// Contexto que utiliza la estrategia
public class Contexto {
    private Estrategia estrategia;

    public Contexto(Estrategia estrategia) {
        this.estrategia = estrategia;
    }

    public void ejecutarAlgoritmo() {
        estrategia.ejecutarAlgoritmo();
    }

    public void cambiarEstrategia(Estrategia nuevaEstrategia) {
        estrategia = nuevaEstrategia;
    }
}
</code>

<text>
En este ejemplo, Estrategia es la interfaz común para los algoritmos, EstrategiaConcretaA y EstrategiaConcretaB son implementaciones específicas de los algoritmos, y Contexto es la clase que utiliza una estrategia y puede cambiarla dinámicamente.
</text>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Strategy:
</subtitle>

<text>
El Patrón Strategy es apropiado cuando:
</text>

<list>
<item>
Se necesitan diferentes variantes de un algoritmo: Si hay múltiples algoritmos que pueden ser intercambiados o extendidos independientemente del cliente.
</item>

<item>
El cliente debe variar independientemente de los algoritmos que utiliza: Si se desea evitar que el cliente esté directamente acoplado a la implementación de los algoritmos.
</item>

<item>
Se busca una estructura que favorezca la extensibilidad: El Strategy permite agregar nuevos algoritmos fácilmente sin modificar el código existente.
</item>
</list>

<subtitle>
Consideraciones Importantes:
</subtitle>

<text>
Al utilizar el Patrón Strategy, se deben tener en cuenta algunas consideraciones:
</text>

<list>
<item>
Composición vs. Herencia: En lugar de utilizar la herencia para definir diferentes algoritmos, el Strategy favorece la composición, lo que ofrece una mayor flexibilidad y evita problemas asociados con la herencia.
</item>

<item>
Conocimiento del Contexto: El contexto debe tener un conocimiento adecuado de las estrategias disponibles para poder cambiar dinámicamente entre ellas.
</item>

<item>
Costo de Cambio: Cambiar dinámicamente las estrategias puede tener un costo. Se debe evaluar si la flexibilidad proporcionada por el Strategy justifica este costo en la aplicación específica.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón Strategy ofrece una solución elegante para gestionar familias de algoritmos, permitiendo que el cliente varíe independientemente de los algoritmos que utiliza. Su aplicación adecuada puede mejorar la flexibilidad y la extensibilidad en el diseño de sistemas.
</text>
