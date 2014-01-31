Title: Aprendiendo Fortran. Conceptos Básicos
Date: 2014-01-16 18:00:00
Slug: aprendiendo-fortran-conceptos-basicos
Author: O. A. Rodríguez
Category: Fortran
Tags: Programación, Curso de Fortran
Thumbnail: fortran-logo.png
Style: blue
Summary: Segunda entrega del Curso de Fortran. Esta entrega es una continuación de la anterior, la cual presenta los elementos básicos del lenguaje.


Fortran es lo que se denomina un lenguaje de programación de alto nivel, de tipo
estático y cuyo código debe ser *compilado* a lenguaje de máquina antes de que pueda
ser usado. Se puede catalogar como un lenguaje que sigue preferentemente el paradigma
de programación procedural. Enumeremos con algo de detalle respecto los puntos
anteriores:

* Es de alto nivel ya que abstrae las particularidades de cada computadora
mediante un conjunto de conceptos (identificadores, objetos, etc.) relacionados
más claramente con la forma de pensar de los humanos.

* Un programa en Fortran debe pasar por proceso de transformación antes de ser
funcional. Dicho proceso se denomina compilación, y en éste el código fuente,
escrito en Fortran, es traducido a otro lenguaje, el lenguaje de máquina, el
cual puede ser ejecutado por la computadora.

* El lenguaje es de tipo estático debido a que los elementos del lenguaje
(identificador, función, etc) sólo pueden ser enlazados a información de un
sólo tipo, el cual no puede cambiar.

* Es procedural, valga la redundancia, porque se basa en el uso de procedimientos
(funciones y subrutinas) para organizar los programas. Las versiones más recientes
del lenguaje implementan el paradigma de programación orientada a objetos.

Los elementos de alto nivel del lenguaje consisten de un subconjunto de palabras
del lenguaje inglés, cada una con su propio significado, y cuyo uso está definido
por una serie de reglas gramaticales (sintaxis), así que antes de comenzar a
programar hay que conocer dichas reglas. Naturalmente, cualquier código que viole
dichas reglas es un programa inútil, y no es buen candidato para ser ejecutado
por la máquina, ya que ni siquiera podrá pasar el proceso de compilación. Por
otra parte, si el se ajusta a las reglas gramaticales el proceso de compilación
será exitoso, y el programa ejecutable final estará listo para ser usado.



Un primer vistazo a las variables
-----------------------------------

Consideremos el programa ``holamundo.f95`` nuevamente.

    #!fortran
    program Main
        print *, "Hola Mundo"
    end program Main

En él se pueden ver algunos elementos sintácticos del lenguaje:

* ``program Main`` y ``end program Main``. Estas instrucciones indican el punto
inicial y punto final de ejecución; cualquier otra instrucción comprendida entre
ambas forma parte del programa.

* ``print *, "Hola Mundo"``: un instrucción que imprime el texto ``Hola Mundo''
en un concepto llamado *la salida estándar*, la cual, por simplicidad (y porque
comúnmente lo es a este nivel de aprendizaje del lenguaje) es una línea de
comandos.

Para ser más precisos, ``program``, ``end`` y ``print`` forman parte de ese
conjunto de elementos sintácticos especiales llamados palabras clave, o
**keywords**.

A medida que la complejidad de un programa aumenta se llega al punto
en que se tiene que manipular algún tipo de información, quizá para hacer un
cálculo matemático sencillo o resolver una ecuación diferencial. En cualquier caso
se requieren elementos diseñados para tal función: las **variables**. Las variables
son una de las abstracciones fundamentales de Fortran y de cualquier otro lenguaje
de programación. Su función es la de servir como contenedor y etiqueta
identificadora para algún tipo de información: números, texto, etc. El uso
de estas no es nada especial, como se ilustra en este ejemplo:

    #!fortran
    edad = 10                   ! Variable de nombre ``edad`` y valor 10
    mensaje = "Hola Mundo"      ! Variable de nombre ``mensaje``
    pi = 3.1416

Este ejemplo contiene tres variables:

* ``edad``, a la cual se le asigna el valor ``10``
* ``mensaje``, que guarda el el texto ``"Hola Mundo"``
* ``pi``, que equivale a una aproximación del número irracional $\pi$.

Las variables son elementos muy versátiles, ya que la información que guardan
puede cambiar muchas veces durante la ejecución del programa; sin embargo,
están sujetas a algunas restricciones en cuanto al tipo de información que
pueden almacenar: dado que el lenguaje es de tipo estático, cada variable está
asociada con un único tipo de dato, asociación que es permanente durante el
tiempo de vida de la variable (o *scope*) y que restringe qué información se
puede guardar en la variable. En pocas palabras, sólo un tipo de información
se puede asociar a una variable. Por otra parte, el nombre de la variable es el
identificador para la información que se encuentra en la memoria de la
computadora.

En el fragmento de código anteriormente ejemplificado no se especifica el tipo
de dato para las variables, ni se indica donde empieza y donde termina el
programa; es sólo un fragmento de código después de todo. Un programa completo
debe incluir la definición de las variables a utilizar, así como su tipo. Esta operación
se conoce como *declaración de variables*. El siguiente programa completamente
funcional ilustra el punto anterior.

    #!fortran
    program Main

        implicit none

        ! Declaración de variables
        integer :: edad
        character(len=20) :: mensaje
        real :: pi

        edad = 10
        mensaje = "Hola Mundo"
        pi = 3.1416

    end program Main

Esta vez se indica el inicio y el fin del programa, y se indica el tipo y
nombre de las variables antes de usarlas. Las palabras clave ``integer``,
``character`` y ``real`` sirven para definir variables de tipo entero, carácter
de texto y punto flotante, respectivamente. Hay una instrucción particularmente
importante que precede a la declaración de variables: ``implicit none``. El uso
de esta instrucción se fundamente en que Fortran, a pesar de ser un lenguaje de
tipo estático, permite la creación de variables de manera implícita, es decir,
sin ser declaradas previamente. Esto es algo extraño inicialmente, y pareciera
contradecir el hecho de que lenguaje es de tipo estático, mas no es así, ya que
el compilador (durante el proceso de compilación) infiere el tipo de dato que
debe guardar una variable en función de la primera letra con que comienza su nombre.
La regla utilizada de manera predeterminad es:

> En ausencia de la instrucción ``implicit none``, toda variable que comience con
las letras ``i`` hasta la ``n`` será de tipo ``integer``, y si empieza con cualquier
otra letra será de tipo ``real``.

En función de la regla anterior, con tipo implícito tanto ``edad`` como ``pi`` serán
variables de de tipo ``real``, mientras ``mensaje`` será de tipo ``integer``.

La motivación principal de tener tipo implícito es ahorrar tiempo, ya que en principio
el programador no tiene que declarar las variables, sólo tiene que dedicarse a
escribir la lógica del programa. En la práctica el tipo implícito es una fuente
importante de errores semánticos, llamados *bugs*, ya que un error "de dedo"
donde el nombre de las variables se escribe incorrectamente por accidente pasará
desapercibido por el compilador, el cual supondrá que la variable incorrecta es sólo
una nueva variable, asignará un espacio en la memoria de la computadora, pero
con información aleatoria, o basura, la cual corromperá todo calculo subsecuente.
Por ejemplo, confundir la letra "o mayúscula", O, con el cero, 0, es más común de
lo que se podría pensar. Otro ejemplo: la instrucción ``mensaje = "Hola Mundo"``
resultará en un error de compilación, ya que a una variable entera se le
está asignando una cadena de caracteres (texto).



Mostrando información en memoria
---------------------------------

Hasta ahora sólo se ha trabajado con un puñado de palabras clave y variables. La mayor
parte del tiempo, sin embargo, es necesario algún tipo de retroalimentación del programa,
para saber si está funcionando correctamente, y corregirlo en caso contrario. Esto
es parte de un proceso tan complejo como la programación misma: la *depuración*,
donde se detectan los errores semánticos del programa, es decir, cuando el programa
se comporta de manera diferente a la esperada, produciendo resultados incorrectos.
La forma más sencilla de depurar es mostrando en pantalla los valores de las
variables de interés. Esto se hace mediante la instrucción ``print``. En el
programa ``holamundo.f95`` se usa esta palabra por primera vez para mostrar el
mensaje "Hola mundo". Bueno, este es un uso trivial de ``print``, pues la instrucción
es más versátil, y permite mostrar no sólo texto sino variables también; en general
permite mostrar información con formato. Considérese el siguiente ejemplo:

    #!fortran
    pi = 3.14159
    e = 2.71828

    print *, "Constantes matematicas importantes:"
    print *, pi
    print *, e

El resultado de este programa será lo siguiente:

    :::
    Constantes matematicas importantes:
    3.14159012
    2.71828008

¿Qué está ocurriendo aquí? En efecto, ``print`` muestra la información almacenada en
cada variable. La información a mostrar, ya sean variables, números o texto, se
enlistan después de la primera coma. El asterisco antes de la primera coma, ``*,``,
indica que la información se mostrará con *formato libre*, lo cual significa que el compilador usará la
manera más "conveniente" que pueda encontrar. Esta conveniencia dependerá del
diseño mismo del compilador y de las especificaciones básicas del lenguaje. Con
formato libre y sin variables o texto después de primera coma, ``print`` imprime
una línea en blanco. Por ejemplo

    #!fortran
    print *, "Constantes matematicas importantes:"
    print *,
    print *, "pi =", pi
    print *, "e =", e

resulta en

    :::
    Consantes matematicas importantes:

    pi = 3.14159012
    e = 2.71828008



Funciones
------------

Fortran tiene una extensa biblioteca de rutinas matemáticas: seno, coseno,
tangente, exponencial, logaritmo, etc. Cada una de ellas está implementada
mediante un concepto llamado *función*, término común desde el punto de vista
matemático. En un lenguaje de programación las funciones son un elemento para
la organización y reutilización del código; consisten de un grupo de instrucciones
muy relacionadas entre ellas, y que realizan una tarea específica. Pongamos
un ejemplo: la implementación de las funciones matemáticas de variable real.
Sea $f$ una función real de variable real, es decir, $f: \mathbb{R} \to \mathbb{R}$.
Así, $f = f(x)$, con $x \in \mathbb{R}$. Cualquier función matemática puede
ser aproximada mediante una serie finita de sumas; la magnitud del error dependerá
de cuántos términos tenga dicha suma. Por ejemplo, la función [seno](http://en.wikipedia.org/wiki/Sine) puede ser
aproximada a partir de su expresión en serie de Taylor

$$
\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} + R(x^7)
$$

donde el término $R$ es proporcional a $x^7$. Pues bien, estas sumas se pueden
agrupar en un mismo elemento estructural para calcular una aproximación de la
función seno siempre que sea necesario. Este elemento estructural es la función.
Fortran tiene muchas funciones intrínsecas, entre ellas la función ``sin``, que
calcula el seno de un número, y la función ``cos`` que calcula el coseno.
Pero el lenguaje, como otros, no sólo pone a nuestra disposición algunas
cuantas funciones: nos permite incluso definir nuestra propias funciones para
calcular cantidades tan simples o tan complejas como se necesite.

La forma de usar una función es sencilla una vez que nos es familiar el hecho de
que, al menos en Fortran, las funciones siempre devuelven un valor. Esto
significa que una vez que termina la ejecución de una función esta entrega un
valor que puede ser guardado (o solamente *referenciado*) en memoria, es decir,
puede ser guardado en una variable.

    #!fortran
    x = sin(1.0)                    ! Llamada de función.
    print *, "sin(1.0) = ", x

En este ejemplo la instrucción ``x = sin(x)`` ilustra lo que se conoce como
*llamar a una función*, que no es más que el acto de utilizar una función:
``sin(x)`` es la llamada. Cuando se usa la función ``sin`` ésta espera un número,
naturalmente, el cual se escribe entre paréntesis inmediatamente después del
nombre de la función. Luego entonces la función se ejecuta, y el resultado es
el seno del número en cuestión. Este número se guarda en la variable ``x``
mediante el *operador de asignación* ``=``. Luego de compilar y ejecutar el
programa el resultado es el siguiente:

    :::
    sin(1.0) = 0.841470957

Las funciones se invocan escribiendo el nombre de la función, seguido por un par
de paréntesis entre los cuales se escribe una lista de valores o variables
llamados *argumentos de la función*, los cuales van separados por comas:

    #!fortran
    retval = funcion(lista, de, argumentos)


El papel de los argumentos es transparente: son los parámetros que determinan
el valor que devuelve la función. En el caso de la función seno el único argumento
es el número del cual se obtiene el seno. Hablando de manera más concreta, cada
vez que se llama una función la información de los argumentos está siendo
transferida desde el contexto actual al contexto de la función. Para ilustrar
qué es el contexto considérese la siguiente programa donde se implementa una
función muy trivial: el área de un círculo.

    #!fortran
    program Main
    ! Programa que calcula el área de un círculo
    ! areacirculo.f95

    implicit none
    real :: r, area
    real :: pi = 3.14159

    r = 1.0
    area = area_circulo(r)
    print *, "El area de un circulo de radio r=", r, "es A=", area

    contains

        function area_circulo(r)
            ! Variables locales de la función
            real, intent(in) :: r
            real :: area_circulo

            area_circulo = pi*r*r
        end function area_circulo

    end program Main

En este ejemplo aparece la clásica declaración de variables, una llamada a la
función ``area_circulo`` y la instrucción ``print``. Las variables que se
definen en este punto se dice que pertenecen al *contexto global* del programa.
Además se presentan nuevos elementos, como la palabra clave ``contains``, la cual se usa para definir las
funciones internas que pertenecen, en este caso, al programa principal. Delante de
``contains`` aparece la definición de la función ``area_circulo``, que incluye
las instrucciones contenidas entre ``function area_circulo(r)`` y
``end function area_circulo``. Frente al nombre de la función aparecen, entre
paréntesis, sus argumentos, mas en este caso como el área de un círculo sólo
depende de su radio el único argumento que se usa es ``r``.

Dentro de la definición de la función se declaran algunas variables, de manera
similar a como se declaran al inicio del programa; en particular se definen las
variables ``r`` y ``area_circulo``. Esto expone la existencia de un *contexto local* de
la función; las variables que se definen dentro de este contexto existen
solamente dentro de la función, y son inaccesibles desde el exterior. En contraste,
las variables definidas en el contexto global son accesibles desde el contexto local.
Por lo tanto la variable ``pi`` se puede usar dentro de la función ``area_circulo``.
Cómo funcionan los contextos local y global es importante, pues como se puede ver
en el mismo ejemplo la variable ``r`` está declarada en ambos contextos global
y local, y en este último corresponde al argumento de la función. En estos casos
la definición que predomina es la del contexto local.

El valor que ha de devolver la función se debe asignar en una variable con el
mismo nombre de la función. Así el área del círculo, que es ``pi*r*rp`` se
guarda en la variable ``area_circulo``, y finaliza la definición de la función.
Luego se guarda este programa en un archivo de nombre areacirculo.f90, se compila y
ejecuta, dando como resultado

    :::
    El area de un circulo de radio r=1.00000000 es A=3.14159012



Operadores
-------------

En el lenguaje ciertos caracteres se usan para realizar cálculos matemáticos
entre diferentes cantidades y variables, otros para operaciones lógicas y
otros para comparaciones. Estos caracteres especiales se denominan *operadores*.
El primer operador presentado ha sido el **operador de asignación** ``=``, el cual se
emplea para guardar información en variables. Existen otros operadores que se
enlistan a continuación:

* **Aritméticos**. Sirven para realizar operaciones aritméticas entre variables,
cantidades numéricas y, posiblemente, llamadas a funciones.

* **Lógicos**. Se usan para determinar relaciones entre cantidades booleanas
(que sólo pueden ser falsas o verdaderas).

* **Relacionales**. Determinan si alguna relación aritmética entre dos valores
o variables es verdadera o falsa.

Los operadores aritméticos son cinco: suma ``+``, resta``-``, multiplicación ``*``,
división ``/`` y exponenciación ``**``. Todos estos operadores actúan sobre dos
elementos, que pueden ser variables, valores o una combinación de ambos; son lo
que se denomina *operadores binarios*.  El operador ``-`` también puede actuar
sobre un solo operando, en cuyo caso cambia el signo de la cantidad en cuestión;
en este caso se le llama *operador unario*.

    #!fortran
    y = 20                  ! Asignación
    print *, y + 2          ! 22
    print *, y - 5          ! 15
    print *, y * 10         ! 200
    print *, y / 5          ! 4
    print *, y ** 2         ! 400
    print *, -y             ! -20

El resultado de las operaciones aritméticas es una nueva cantidad numérica.

Los operadores lógicos son: *y lógico* ``.and.``, *o lógico* ``.or.``, negación ``.not.``,
equivalencia ``.eqv.`` y no equivalencia ``.neqv.``. Con excepción de ``.not.``
que es operador unario, el resto son operadores binarios, además sólo operan sobre
variables o valores lógicos, un tipo de cantidades que solo pueden tener los
valores ``.true.`` o ``.false.``, verdadero o false, respectivamente. El
comportamiento de estos operadores está sujeta al [álgebra booleana](http://en.wikipedia.org/wiki/Boolean_algebra).

Los operadores relacionales son: igualdad ``==``, mayor que ``>``, menor que ``<``,
mayor o igual que ``>=``, menor o igual que ``<=`` y desigualdad ``/=``.
Dado el desarrollo del lenguaje estos operadores son diferentes a los definidos
en el estándar FORTRAN 77: sus equivalencias son ``.eq.``, ``.gt.``, ``.lt.``,
``.ge.``, ``.le.`` y ``.ne.`` respectivamente; es preferible, sin embargo,
usar las nuevas formas de los operadores para cualquier nuevo programa, y sólo
usar las versiones antiguas para mantener código antiguo.

    #!fortran
    y = 20                  ! Asignación
    print *, y == 2         ! F (falso)
    print *, y > 5          ! T (verdadero)
    print *, y < 30         ! T
    print *, y >= 10        ! T
    print *, y <= 20        ! T
    print *, y /= y         ! F
    print *, y /= 10        ! T

El resultado tanto de una operación lógica como de una relacional es un valor
lógico, que puede ser verdadero o falso. A diferencia de los operadores
aritméticos, los operadores de comparación pueden actuar sobre cadenas de
caracteres también, aunque las reglas puedan resultar sutiles. Por ejemplo,
el siguiente código es válido:

    #!fortran
    character(len=255) :: cad1 = "abcde"
    character(len=255) :: cad2 = "abdce"

    print  *, cad1 < cad2    ! T

La comparación de cadenas se hace carácter por carácter.



Comentarios
---------------

Los comentarios son porciones de código con el único fin de orientar al
programador; cualquier información que contengan es ignorada por el compilador,
y por lo tanto no tienen efectos colaterales en la ejecución del programa.
Generalmente se emplean para mostrar instrucciones o una descripción que sea de
utilidad para la comprensión del programa. En Fortran se definen empleando el
signo de exclamación invertido ``!``, de tal suerte que todo lo que se escriba
delante de éste hasta el final de la línea actual se considera un comentario.

    #!fortran
    print *, "Hola Mundo"   ! Este texto es un comentario y será ignorado por
                            ! el compilador

Como se podrá notar, hemos estado utilizando comentarios para todos nuestros
ejemplos desde el principio. Esto es para hacer énfasis en una de las
*buenas prácticas* de programación, que consiste precisamente en escribir comentarios
para describir la función de una porción de código. Esta recomendación, sin
embargo, puede ser fácilmente abusada; por ejemplo, en el caso de instrucciones
pequeñas que se explican de manera muy obvia. Por otra parte, pueden usarse para
justificar una definición o la motivación para llevar a cabo una operación de una
manera dada. La regla general es que una porción de código cuya funcionalidad
no es inmediatamente obvia debe tener comentarios. Esto será útil para otros
programadores y, en última instancia, para el autor mismo del programa.



Sintaxis del lenguaje
------------------------

Fortran es un lenguaje muy compacto que tiene una sintaxis bastante sencilla,
por lo que no es difícil aprenderlo. Las relaciones entre los componentes
sintácticos del lenguaje se conocen comúnmente como *oraciones*. Hay oraciones
simples, por ejemplo, la declaración de variables, ``implicit none``, ``print *,``
y similares, y hay otras oraciones, llamadas *oraciones compuestas*, que le
dan estructura al programa y definen su flujo de ejecución; éstas pueden contener
otras oraciones, tanto simples como compuestas; algunos ejemplos son
``program ... end program`` y ``function ... end function``. Dada la gran variedad
de elementos sintácticos dentro de las oraciones se presentan comúnmente
combinaciones de valores, variables y posiblemente llamadas a funciones, relacionados
mediante operaciones lógicas y aritméticas. A estas combinaciones se les denomina
*expresiones*, y lo que las caracteriza es que el resultado de su ejecución
en un nuevo valor que puede ser asignado a una variable.

A diferencia de otros lenguajes de programación como C, C++ o Java, Fortran
sigue el principio de una oración por línea, por lo que no requiere caracteres
especiales para delimitar donde termina y donde inicia una oración, mas ésto no
impide escribir más de una oración por línea, lo cual se logra empleando el
carácter ``;``.

    #!fortran
    program Main
        implicit none; print *, "Hola Mundo"
    end program Main

Hay una restricción importante: una línea de código tiene una longitud
máxima de 132 caracteres; los caracteres más allá la columna 132 serán ignorados
por el compilador. Esto puede resultar en errores de sintaxis en el mejor de los casos,
y en *bugs* bastante molestos en el peor. Es posible escribir oraciones más allá
de la columna 132 empleando el carácter de continuación ``&`` al final de la
línea que se quiere continuar:

    #!fortran
    x = 1.0
    z = 1 + x + x**2/2.0 + x**3/6.0 + x**4/24.0 + x**5/120.0 + x**6/720.0 + &
        x**7/5040.0
    print *, z

En este ejemplo el término ``x**7/5040.0`` pertenece a la misma oración donde
se asigna a ``z`` porque se ha usado el carácter ``&``. No está de más indicar
el resultado de este programa:

    :::
    2.71825409

De forma muy similar se pueden dividir cadenas de texto muy largas:

    #!fortran
    print *, "Esta es una cadena de texto muy larga, y no cabe dentro de una &
    linea de 132 caracteres aceptada por Fortran 90. Por eso es necesario &
    continuarla empleando el & al final de cada linea"

Una peculiaridad de todos los ejemplos ilustrados hasta el momento es que las
palabras claves, las variables y las funciones se han escrito en minúsculas, nunca
con mayúsculas. Bien podría surgir la cuestión de qué sucede cuando se mezclan
letras mayúsculas y minúsculas en una misma oración; después de todo en otros
lenguajes de programación esto hace una diferencia total. La respuesta es que
Fortran es un lenguaje *insensible* al uso de mayúsculas y minúsculas; sólo
importa el significado del carácter empleado. Así, el siguiente ejemplo de
"Hola mundo" es completamente equivalente al ilustrado con anterioridad:

    #!fortran
    PROGRAM MAIN
        IMPLICIT NONE
        PRINT *, "Hola Mundo"
    END PROGRAM MAIN

Naturalmente surge la cuestión de qué forma emplear para escribir un programa.
Escribir código empleando sólo mayúsculas es una práctica heredada de FORTRAN 77.
Los estándares posteriores enfatizan el uso de minúsculas para la mayoría de las
oraciones, pues es muy incómodo leer texto en mayúsculas exclusivamente.



Formato
---------

Gran parte de un programa consiste de espacios en blanco que sirven para
separar oraciones. En Fortran 90 y versiones posteriores **todo** el espacio en
blanco es insignificante, y el compilador simplemente lo ignora. Por esta
razón las siguientes versiones del programa "Hola mundo" son equivalentes:

    #!fortran
    program Main
        implicit none
        print *, "Hola Mundo"
    end program Main

    program Main
    implicit none
    print *, "Hola Mundo"
    end program Main

La única diferencia entre ambos programas es que en el primer ejemplo el cuerpo
del programa está sangrado y en el segundo no. Esto tiene un efecto importante
en la legibilidad del programa ya que el sangrado delimita de manera visual la
extensión de una oración compuesta, en este caso ``program ... end program``,
por lo cual es más fácil de identificar. Un programa donde no se hace uso adecuado
del espacio en blanco resulta ilegible, o cuando menos difícil de entender, pues
se carece de una visualización de la secuencia lógica y el contexto que rodea a
cada oración.

A manera de paréntesis, en versiones anteriores de Fortran 90 se requiere que
las primeras seis columnas de todas las líneas del programa se dejen, en
principio, en blanco, porque tienen un significado especial para el compilador.
