---
title: "Patrones de diseño: Observer"
subtitle: "Un patrón que define una dependencia uno a muchos entre objetos, de modo que cuando un objeto cambia su estado, todos sus dependientes son notificados y actualizados automáticamente."
date: "2023-12-13"
image: "https://i.imgur.com/G99BmEN.png"
tags: ["design patterns"]
---

<text>
Dentro del universo de patrones de diseño, el Patrón Observer se destaca como una solución que establece una dependencia uno a muchos entre objetos. Esta dependencia permite que cuando un objeto cambia su estado, todos sus observadores sean notificados y actualizados automáticamente, lo que resulta útil en situaciones donde múltiples objetos deben reaccionar a cambios en un objeto principal.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón Observer, clasificado como un patrón de comportamiento, se centra en definir una relación de dependencia uno a muchos entre un sujeto (objeto observable) y sus observadores. Cuando el sujeto cambia su estado, todos los observadores son notificados y actualizados automáticamente.
</text>

<subtitle>
Implementación del Patrón:
</subtitle>

<text>
La implementación típica del Patrón Observer implica la creación de dos tipos de objetos: el Sujeto (Observable) y el Observador. El sujeto lleva un registro de sus observadores y los notifica sobre cualquier cambio en su estado.
</text>

<code language="javascript">
import java.util.ArrayList;
import java.util.List;

// Sujeto (Observable)
public class Sujeto {
    private List<Observador> observadores = new ArrayList<>();
    private int estado;

    public void agregarObservador(Observador observador) {
        observadores.add(observador);
    }

    public void eliminarObservador(Observador observador) {
        observadores.remove(observador);
    }

    public void notificarObservadores() {
        for (Observador observador : observadores) {
            observador.actualizar(estado);
        }
    }

    public void setEstado(int estado) {
        this.estado = estado;
        notificarObservadores();
    }
}

// Observador
public interface Observador {
    void actualizar(int nuevoEstado);
}

// ObservadorConcreto
public class ObservadorConcreto implements Observador {
    private int estado;

    public void actualizar(int nuevoEstado) {
        estado = nuevoEstado;
        // Lógica de actualización del observador
    }
}
</code>

<text>
En este ejemplo, Sujeto es el objeto observable que mantiene una lista de Observadores y notifica a todos los observadores cuando su estado cambia. Observador es la interfaz que define el método de actualización, y ObservadorConcreto es una implementación concreta del observador.
</text>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Observer:
</subtitle>

<text>
El Patrón Observer es apropiado cuando:
</text>

<list>
<item>
Cambios en el estado de un objeto deben notificar automáticamente a otros objetos: Si la modificación de un objeto requiere que otros objetos se actualicen, el Observer es una solución eficaz.
</item>

<item>
Se desea desacoplar el sujeto (observable) de sus observadores: El Observer permite que el sujeto y los observadores operen de manera independiente, sin tener conocimiento directo unos de otros.
</item>

<item>
Existe una dependencia uno a muchos entre objetos: Cuando varios objetos deben reaccionar a cambios en un objeto central, el Observer facilita esta relación.
</item>
</list>

<subtitle>
Consideraciones Importantes:
</subtitle>

<text>
Al utilizar el Patrón Observer, se deben tener en cuenta algunas consideraciones:
</text>

<list>
<item>
Desempeño: Si hay muchos observadores y la lógica de actualización es compleja, puede haber un impacto en el rendimiento. Se debe equilibrar la necesidad de notificar a todos los observadores con la eficiencia.
</item>

<item>
Orden de Notificación: El orden en que se notifica a los observadores puede ser importante en algunos casos. Asegúrate de que la notificación siga un orden específico si es necesario.
</item>

<item>
Garbage Collection: Se debe tener cuidado con las referencias para evitar problemas de recolección de basura. Si los observadores no se eliminan adecuadamente, pueden generar fugas de memoria.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón Observer proporciona una forma efectiva de establecer una dependencia uno a muchos entre objetos, permitiendo que los observadores reaccionen automáticamente a cambios en el objeto observable. Su aplicación adecuada puede mejorar la flexibilidad y la extensibilidad en el diseño de sistemas.
</text>
