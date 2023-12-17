---
title: "Patrones de diseño: Command"
subtitle: "Un patrón que encapsula una solicitud como un objeto, permitiendo parametrizar clientes con operaciones, encolar solicitudes, y soportar operaciones reversibles."
date: "2023-12-10"
image: "https://i.imgur.com/q94ywE7.png"
tags: ["design patterns"]
---

<text>
En el vasto mundo del desarrollo de software, el Patrón Command se destaca como una solución que encapsula una solicitud como un objeto. Este enfoque permite parametrizar clientes con operaciones, encolar solicitudes y, de manera notable, soportar operaciones reversibles, lo que lo convierte en una herramienta versátil en el diseño de sistemas.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón Command, clasificado como un patrón de comportamiento, se centra en encapsular una solicitud como un objeto. Se logra creando clases que representan comandos concretos, permitiendo a los clientes parametrizar objetos con operaciones y gestionar las solicitudes de manera flexible.
</text>

<subtitle>
Implementación del Patrón:
</subtitle>

<text>
La implementación típica del Patrón Command involucra la creación de una interfaz común para todos los comandos y la implementación de clases concretas que implementan esa interfaz.
</text>

<code language="javascript">
public interface Comando {
    void ejecutar();
}

public class ComandoConcretoA implements Comando {
    private Receptor receptor;

    public ComandoConcretoA(Receptor receptor) {
        this.receptor = receptor;
    }

    public void ejecutar() {
        receptor.accionA();
    }
}

public class ComandoConcretoB implements Comando {
    private Receptor receptor;

    public ComandoConcretoB(Receptor receptor) {
        this.receptor = receptor;
    }

    public void ejecutar() {
        receptor.accionB();
    }
}

public class Invocador {
    private Comando comando;

    public void setComando(Comando comando) {
        this.comando = comando;
    }

    public void ejecutarComando() {
        comando.ejecutar();
    }
}

public class Receptor {
    public void accionA() {
        // Lógica de la acción A
    }

    public void accionB() {
        // Lógica de la acción B
    }
}
</code>

<text>
En este ejemplo, Comando es la interfaz común para todos los comandos con el método ejecutar, ComandoConcretoA y ComandoConcretoB son implementaciones concretas de comandos, Invocador es responsable de ejecutar un comando, y Receptor es la clase que realiza las acciones reales.
</text>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Command:
</subtitle>

<text>
El Patrón Command es apropiado cuando:
</text>

<list>
<item>
Se necesita parametrizar objetos con operaciones: El Command permite representar operaciones como objetos, lo que facilita la parametrización y configuración de los clientes.
</item>

<item>
Se quiere encolar solicitudes: Poder encolar comandos para su ejecución posterior es útil en situaciones como la implementación de colas de tareas o la gestión de operaciones en un historial.
</item>

<item>
Se busca soportar operaciones reversibles: Al encapsular una operación como un objeto, es posible implementar funciones de deshacer y rehacer, lo que puede ser útil en aplicaciones que requieren un historial de acciones.
</item>
</list>

<subtitle>
Consideraciones Importantes:
</subtitle>

<text>
Al utilizar el Patrón Command, se deben tener en cuenta algunas consideraciones:
</text>

<list>
<item>
Gestión de Parámetros: Si las operaciones requieren parámetros, se deben gestionar adecuadamente para garantizar la flexibilidad del patrón.
</item>

<item>
Operaciones Reversibles: La implementación de operaciones reversibles puede aumentar la complejidad del diseño, especialmente en sistemas grandes.
</item>

<item>
Comandos No Acoplados: Es fundamental asegurarse de que los comandos y los receptores estén desacoplados para mantener la flexibilidad del sistema.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón Command proporciona una forma elegante de encapsular operaciones como objetos, permitiendo una mayor flexibilidad, encolado de solicitudes y soporte para operaciones reversibles. Su aplicación adecuada puede mejorar la modularidad y el mantenimiento del código.
</text>