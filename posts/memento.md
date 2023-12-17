---
title: "Patrones de diseño: Memento"
subtitle: "Un patrón que permite capturar y externalizar el estado interno de un objeto para su posterior restauración."
date: "2023-12-11"
image: "https://i.imgur.com/kbm5Vhj.png"
tags: ["design patterns"]
---

<text>
Dentro del vasto repertorio de patrones de diseño, el Patrón Memento destaca como una solución que permite capturar y externalizar el estado interno de un objeto. Este enfoque facilita la restauración del objeto a un estado previo, lo que resulta útil en situaciones donde se requiere la reversión de cambios o la implementación de funciones de deshacer.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón Memento, clasificado como un patrón de comportamiento, se centra en capturar y externalizar el estado interno de un objeto, permitiendo que el objeto pueda ser restaurado a ese estado en el futuro. Esto se logra mediante la creación de tres componentes principales: el Originador, el Memento y el Caretaker.
</text>

<subtitle>
Implementación del Patrón:
</subtitle>

<text>
La implementación típica del Patrón Memento involucra la creación de tres componentes principales: el Originador, que es el objeto cuyo estado se va a guardar y restaurar; el Memento, que es la representación del estado interno del Originador en un momento dado; y el Caretaker, que es responsable de gestionar y almacenar los Mementos.
</text>

<code language="javascript">
public class Memento {
    private String estado;

    public Memento(String estado) {
        this.estado = estado;
    }

    public String getEstado() {
        return estado;
    }
}

public class Originador {
    private String estado;

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Memento crearMemento() {
        return new Memento(estado);
    }

    public void restaurarDesdeMemento(Memento memento) {
        estado = memento.getEstado();
    }
}

public class Caretaker {
    private List<Memento> mementos = new ArrayList<>();

    public void agregarMemento(Memento memento) {
        mementos.add(memento);
    }

    public Memento obtenerMemento(int indice) {
        return mementos.get(indice);
    }
}
</code>

<text>
En este ejemplo, Memento es la clase que almacena el estado interno, Originador es el objeto cuyo estado se va a guardar y restaurar, y Caretaker es el gestor que almacena y administra los Mementos.
</text>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Memento:
</subtitle>

<text>
El Patrón Memento es apropiado cuando:
</text>

<list>
<item>
Se necesita la capacidad de revertir cambios en el estado de un objeto: El Memento facilita la reversión del estado de un objeto a un momento anterior.
</item>

<item>
Se busca implementar funciones de deshacer: Al guardar el historial de estados del objeto, es posible implementar funciones de deshacer para permitir que los usuarios retrocedan en la aplicación.
</item>

<item>
Se quiere aislar la lógica de almacenamiento del estado interno: El Memento permite separar la responsabilidad de almacenar el estado interno en una clase independiente (Caretaker).
</item>
</list>

<subtitle>
Consideraciones Importantes:
</subtitle>

<text>
Al utilizar el Patrón Memento, se deben tener en cuenta algunas consideraciones:
</text>

<list>
<item>
Costo de Almacenamiento: Dependiendo de la frecuencia y la cantidad de cambios de estado, el almacenamiento de Mementos puede tener un impacto en la memoria.
</item>

<item>
Complejidad del Cuidador (Caretaker): El Caretaker puede volverse complejo si debe gestionar muchos Mementos. Se debe equilibrar la cantidad de Mementos almacenados según los requisitos de la aplicación.
</item>

<item>
Granularidad del Estado: La granularidad del estado almacenado en el Memento debe ser adecuada para los requisitos de la aplicación. Algunas aplicaciones pueden requerir un historial detallado, mientras que otras pueden necesitar solo hitos significativos.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón Memento ofrece una solución eficaz para capturar y externalizar el estado interno de un objeto, permitiendo la restauración del objeto a estados previos. Su aplicación adecuada puede mejorar la flexibilidad y la reversión de cambios en una aplicación.
</text>