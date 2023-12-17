---
title: "Patrones de diseño: Proxy"
subtitle: "Un patrón que actúa como un sustituto de otro objeto, controlando el acceso a este."
date: "2023-12-14"
image: "https://i.imgur.com/uI3pvr4.png"
tags: ["design patterns"]
---

<text>
Dentro del conjunto de patrones de diseño, el Patrón Proxy destaca como un mecanismo que actúa como un sustituto de otro objeto, controlando su acceso. Este control puede ser útil para diversas situaciones, como la gestión de recursos o la implementación de operaciones diferidas.
</text>

<subtitle>
Concepto General:
</subtitle>

<text>
El Patrón Proxy, clasificado como un patrón estructural, se centra en proporcionar un sustituto o representante de otro objeto. Este sustituto controla el acceso al objeto original, permitiendo al proxy gestionar diferentes aspectos, como la creación tardía del objeto, el control de acceso, o la gestión de recursos.
</text>

<subtitle>
Implementación del Patrón:
</subtitle>

<text>
La implementación típica del Patrón Proxy implica la creación de una interfaz común para el objeto real y su proxy. Los proxies implementan la misma interfaz que el objeto real y, en muchos casos, actúan como una envoltura que delega las operaciones al objeto real.
</text>

<code language="javascript">
public interface ObjetoReal {
    void operacion();
}

public class ObjetoRealConcreto implements ObjetoReal {
    public void operacion() {
        // Implementación del objeto real
    }
}

public class Proxy implements ObjetoReal {
    private ObjetoRealConcreto objetoReal;

    public void operacion() {
        if (objetoReal == null) {
            objetoReal = new ObjetoRealConcreto();
        }
        // Lógica adicional del proxy antes o después de delegar a objeto real
        objetoReal.operacion();
    }
}
</code>

<text>
En este ejemplo, ObjetoReal es la interfaz común, ObjetoRealConcreto es la implementación real, y Proxy es el sustituto que controla el acceso al objeto real. El proxy realiza la creación tardía del objeto real y puede agregar lógica adicional antes o después de delegar las operaciones al objeto real.
</text>

<subtitle>
Cómo Reconocer Cuándo Usar el Patrón Proxy:
</subtitle>

<text>
El Patrón Proxy es apropiado cuando:
</text>

<list>
<item>
Se necesita un control de acceso o seguridad: El proxy puede gestionar y verificar el acceso antes de permitir que el objeto real realice operaciones.
</item>

<item>
Se busca una creación tardía del objeto: Si la creación del objeto real es costosa y solo debe hacerse cuando sea necesario, el proxy puede realizar la creación en el momento adecuado.
</item>

<item>
Se desea añadir lógica adicional antes o después de realizar operaciones en el objeto real: El proxy permite extender el comportamiento del objeto real sin modificar su implementación.
</item>
</list>

<subtitle>
Consideraciones Importantes:
</subtitle>

<text>
Al utilizar el Patrón Proxy, se deben tener en cuenta algunas consideraciones:
</text>

<list>
<item>
Complejidad Adicional: El uso de proxies puede introducir una capa adicional de complejidad, especialmente cuando se agrega lógica adicional. Se debe equilibrar la simplicidad del diseño con la necesidad de control.
</item>

<item>
Condiciones de Acceso: Las condiciones de acceso en el proxy deben ser cuidadosamente gestionadas para garantizar que el objeto real se accede de manera segura y adecuada.
</item>

<item>
Impacto en el Rendimiento: La creación tardía del objeto real puede tener un impacto en el rendimiento, especialmente en situaciones donde la eficiencia es crítica.
</item>
</list>

<subtitle>
Conclusión:
</subtitle>

<text>
En resumen, el Patrón Proxy proporciona un sustituto para otro objeto, permitiendo controlar el acceso, gestionar recursos o añadir lógica adicional. Su aplicación adecuada puede mejorar la seguridad, eficiencia y flexibilidad en el diseño de sistemas.
</text>