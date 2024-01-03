---
title: "Los principios SOLID"
subtitle: "Los principios SOLID representan cinco principios básicos de la programación orientada a objetos y el diseño."
date: "2024-1-2"
image: "https://i.imgur.com/FpHqv1I.png"
tags: ["programming concepts"]
---

<subtitle>
¿Qué son los principios SOLID?
</subtitle>

<text>
Si hablamos de diseño y desarrollo de aplicaciones, Principios SOLID son unas palabras que debes conocer como uno de los fundamentos de la arquitectura y desarrollo de software.
</text>

 <text>
SOLID es el acrónimo que acuñó Michael Feathers, basándose en los principios de la programación orientada a objetos que Robert C. Martin había recopilado en el año 2000 en su paper “Design Principles and Design Patterns”.
</text>

<subtitle>
Los principios SOLID
</subtitle>

<text>
Los 5 principios SOLID de diseño de aplicaciones de software son:
</text>

<list>
<item>
S – Single Responsibility Principle (SRP)
</item>

<item>
O – Open/Closed Principle (OCP)
</item>

<item>
L – Liskov Substitution Principle (LSP)
</item>

<item>
I – Interface Segregation Principle (ISP)
</item>

<item>
D – Dependency Inversion Principle (DIP)
</item>
</list>

<text>
Entre los objetivos de tener en cuenta estos 5 principios a la hora de escribir código encontramos:
</text>

<list>
<item>
Crear un software eficaz: que cumpla con su cometido y que sea robusto y estable.
</item>
<item>
Escribir un código limpio y flexible ante los cambios: que se pueda modificar fácilmente según necesidad, que sea reutilizable y mantenible.
</item>
<item>
Permitir escalabilidad: que acepte ser ampliado con nuevas funcionalidades de manera ágil.
</item>
</list>

<subtitle>
1. Principio de Responsabilidad Única
</subtitle>

<text>
“A class should have one, and only one, reason to change.”
</text>

<text>
La S del acrónimo del que hablamos hoy se refiere a Single Responsibility Principle (SRP). Según este principio “una clase debería tener una, y solo una, razón para cambiar”. Es esto, precisamente, “razón para cambiar”, lo que Robert C. Martin identifica como “responsabilidad”.
</text>

<text>
El principio de Responsabilidad Única es el más importante y fundamental de SOLID, muy sencillo de explicar, pero el más difícil de seguir en la práctica.
</text>

<text>
“Gather together the things that change for the same reasons. Separate those things that change for different reasons”, es decir: “Reúne las cosas que cambian por las mismas razones. Separa aquellas que cambian por razones diferentes”.
</text>

<subtitle>
2. Principio de Abierto/Cerrado
</subtitle>

<text>
“You should be able to extend a classes behavior, without modifying it.”
</text>

<text>
El segundo principio de SOLID lo formuló Bertrand Meyer en 1988 en su libro “Object Oriented Software Construction” y dice: “Deberías ser capaz de extender el comportamiento de una clase, sin modificarla”. En otras palabras: las clases que usas deberían estar abiertas para poder extenderse y cerradas para modificarse.
</text>

<text>
Es importante tener en cuenta el Open/Closed Principle (OCP) a la hora de desarrollar clases, librerías o frameworks.
</text>

<subtitle>
3. Principio de Sustitución de Liskov
</subtitle>

<text>
“Derived classes must be substitutable for their base classes.”
</text>

<text>
La L de SOLID alude al apellido de quien lo creó, Barbara Liskov, y dice que “las clases derivadas deben poder sustituirse por sus clases base”.
</text>

<text>
Esto significa que los objetos deben poder ser reemplazados por instancias con sus subtipos sin alterar el correcto funcionamiento del sistema. Si en un programa utilizamos cierta clase, deberíamos poder usar cualquiera de sus subclases sin interferir en la funcionalidad del programa.
</text>

<text>
Según Robert C. Martin incumplir el Liskov Substitution Principle (LSP) implica violar también el principio de Abierto/Cerrado.
</text>

<subtitle>
4. Principio de Segregación de la Interfaz
</subtitle>

<text>
“Make fine grained interfaces that are client specific.”
</text>

<text>
En el cuarto principio de SOLID, se suguiere: “Haz interfaces que sean específicas para un tipo de cliente”, es decir, para una finalidad concreta.
</text>

<text>
En este sentido, según el Interface Segregation Principle (ISP), es preferible contar con muchas interfaces que definan pocos métodos que tener una interface forzada a implementar muchos métodos a los que no dará uso.
</text>

<subtitle>
5. Principio de Inversión de Dependencias
</subtitle>

<text>
“Depend on abstractions, not on concretions.”
</text>

<text>
Llegamos al último principio: “Depende de abstracciones, no de clases concretas”.
</text>

<list>
<item>
Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones.
</item>

<item>
Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.
</item>
</list>

<text>
El objetivo del Dependency Inversion Principle (DIP) consiste en reducir las dependencias entre los módulos del código, es decir, alcanzar un bajo acoplamiento de las clases.
</text>

<subtitle>
Conclusión
</subtitle>

<text>
Los principios SOLID son eso: principios, es decir, buenas prácticas que pueden ayudar a escribir un mejor código: más limpio, mantenible y escalable.
</text>

<text>
Como indica el propio Robert C. Martin en su artículo “Getting a SOLID start” no se trata de reglas, ni leyes, ni verdades absolutas, sino más bien soluciones de sentido común a problemas comunes. Son heurísticos, basados en la experiencia: “se ha observado que funcionan en muchos casos; pero no hay pruebas de que siempre funcionen, ni de que siempre se deban seguir.”
</text>