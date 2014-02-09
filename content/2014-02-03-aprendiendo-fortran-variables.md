Title: Aprendiendo Fortran. Variables
Date: 2014-02-03 18:00:00
Slug: aprendiendo-fortran-variables
Author: O. A. Rodríguez
Email: oarodriguez@live.com.mx
Category: Fortran
Tags: Programación, Curso de Fortran
Thumbnail: fortran-logo
Style: blue
Summary: En esta entrega del curso de Fortran abordaremos el concepto de variable con detalle, así como sus usos.

En la entrega anterior abordamos el concepto de variables de manera rápida. En este
capítulo abordaremos el concepto con detalle, para ilustrar los tipos y distintos usos
de las variables.



Declaración y asignación básica
---------------------------------

Hemos visto que para almacenar y manipular información en la memoria recurrimos
a las variables, las cuales sirven de identificador a una ubicación en la memoria
en donde está la información. Para usar variables primero hay que definirlas,
lo que se conoce como **Declaración de variables**. Así, cada vez que declaramos
una variable estamos reservando y etiquetando una pequeña región de la memoria para
su uso posterior. Como paréntesis, no tenemos control sobre qué región se ha de reservar cuando
se declara una variable (eso es tarea del sistema operativo), ni conocemos la
información que inicialmente está allí.


Ya vimos la declaración básica de variables en
[Aprendiendo Fortran. Conceptos Básicos]({filename}/2014-01-16-aprendiendo-fortran-conceptos-basicos.md).
Allí aprendimos que las variables se declaran antes que cualquier otra oración,
y como buena práctica, después de ``implicit none``.

    #!fortran
    implicit none
    real :: var1 , var2   ! Aquí pueden ir más variables reales...
    integer :: var3 , var4   ! Aquí pueden ir más enteras...

    ! Resto del programa...

De manera general las variables se declaran de la siguiente manera:

    :::
    tipo[(opciones), modificadores] :: variable[[=posible_valor_inicial], variable2, ...]

En esta notación todo lo que está entre corchetes ``[]`` es opcional.
El carácter ``::`` es muy importante, ya que a su izquierda se escribe el tipo
que tendrá la variable y, de manera opcional, algunos modificadores que cambian el
comportamiento de las variables.,

En principio las variables pueden tener uno de los cinco tipos intrínsecos:

* ``integer``, para números enteros.
* ``real``, para números con fracción decimal.
* ``complex``, para [números complejos](http://es.wikipedia.org/wiki/N%C3%BAmero_complejo).
* ``character``, para representar porciones de texto .
* ``logical``, para cantidades de tipo lógico.

El tipo no puede ser cambiado después de la declaración. Enseguida de ``::`` se
escriben los nombres de las variables separados por comas. Sólo se requiere
escribir el nombre de una variable, el resto son opcionales y se pueden declarar
en otra línea. También es opcional el valor inicial de la variable. Las
restricciones sobre los nombres de las variable son simples: sólo pueden contener
caracteres alfanuméricos y guiones bajos, deben empezar siempre con una letra,
y su longitud máxima son 31 caracteres.

La declaración simplemente asigna memoria a las variables, no les da algún valor
inicial. Así, si mostráramos el valor de una variable declarada, mas no inicializada,
veríamos valores aleatorios e impredecibles. Para asignarle un valor inicial a una
variable empleamos el operador de asignación ``=``,

    :::
    variable = valor_a_asignar

donde ``valor_a_asignar`` puede ser un valor literal, o bien el resultado de evaluar
una expresión. Cuando decimos valor literal, o simplemente literal, nos referimos a
valores numéricos, lógicos o de tipo carácter, e incluso valores compuestos como
arreglos, que aparecen explícitamente en el programa, y por ende representan un valor fijo.

    #!fortran
    int1 = 24
    x = 1.234567
    boolean = .true.
    print *, "Hola Mundo"

En este ejemplo los valores ``24``, ``1.234567``, ``.true.`` y ``"Hola Mundo"`` son
literales, pues están dados explícitamente, no almacenados en una variable.



Variables de tipo entero. La clase de una variable
---------------------------------------------------

Las cantidades ``0``, ``1``, ``11``, ``-1`` y similares son, obviamente, números enteros.
Las variables que almacenan este tipo de información se denominan enteras, y su tipo es
``integer``. En la mayoría de las arquitecturas una variable ``integer`` tiene una
longitud de 4 bytes de memoria, y corresponde al tipo ``int`` del lenguaje C.

    #!fortran
    integer :: int1
    integer :: m, n         ! Dos variables en la misma declaración

El tamaño en memoria de una variable entera es un parámetro importante, ya que define
el intervalo de valores que puede guardar. Por ejemplo, una variable entera de 4 bytes,
o 32 bits, puede guardar desde un rango de $−2^{31}$ hasta $2^{31} − 1$. El tamaño
en memoria depende de la clase de un entero, esta última se puede determinar empleando
la función intrínseca ``kind``.

    #!fortran
    print *, kind(1.0)

Los enteros declarados como se ha hecho hasta ahora pertenecen a la clase
predeterminada por el compilador. En gfortran en una PC convencional es ``4``, pero
en otros compiladores puede cambiar.

La existencia de las clases se justifica porque, en ocasiones, ocurre que los enteros
predeterminados no son suficientes para representar un número dado. Por ejemplo,
$2^{32}$. Nuevamente, en una PC normal tratar de asignar este valor tan grande resultará en
un desbordamiento aritmético, o *integer overflow*. Algunos de estos errores serán
detectados por el compilador, otros no, así que hay que estar atentos ante un posible
desbordamiento inesperado.

    #!fortran
    integer :: m
    m = 2**32

Al ejecutar este programa obtenemos un error como el siguiente

    :::
    a = 2**32
     1
    Error: Desborde aritmético al convertir INTEGER(4) a INTEGER(2) en (1).

Si una variable entera normal no es suficiente para guardar algún valor se puede
usar la función función intrínseca ``selected_int_kind`` para determinar qué clase
de enteros sí pueden guardarlo, o si dicha clase no existe.

    #!fortran
    integer, parameter :: cls = selected_int_kind(r=10)

La función ``selected_int_kind`` acepta como argumento un entero ``r``, y
devuelve el parámetro de clase de un entero que representa a todos los enteros
entre $−10^{r}$ y $10^{r}$, o bien que tiene al menos ``r`` dígitos de precisión.
Si no existe un tipo de entero que puede representar un valor dado la función
devuelve ``-1``. La clase de una variable en sí misma es un entero, el cual
se puede guardar en una variable entera normal. El código anterior es muy interesante
porque, además de guardar la clase en la variable ``cls`` de tipo entera, estamos
aplicando un modificador a la variable, ``parameter`` que indica al compilador
que esta variable, además de ser entera, debe permanecer constante, lo cual significa
que el valor de ``cls`` no puede cambiar posteriormente.

Las clases de enteros disponibles en gfortran son:

* Clase ``1``. Tamaño de 8 bits, intervalo desde ``-128`` hasta ``127``
* Clase ``2``. Tamaño de 16 bits, intervalo desde ``-32,768`` hasta ``32,767``
* Clase ``4``. Tamaño de 32 bits, intervalo desde ``-2147483648`` hasta ``2147483647``
* Clase ``8``. Tamaño de 64 bits, intervalo desde ``-9223372036854775808`` hasta ``9223372036854775807``

En general para un entero de $n$ bits el intervalo de posibles valores abarca desde
$−2^{n−1}$ hasta $2^{n−1}−1$.

La clase de un entero se puede emplear para declarar otros enteros de dicha clase,
siempre y cuando sea diferente de ``-1``. En esta situación el tipo de la variable
se especifica como una opción durante la declaración, entre paréntesis, delante
del tipo de la variable.

    #!fortran
    integer, parameter :: cls = selected_int_kind(r=10)
    integer :: a                            ! Entero normal
    integer(kind=cls) :: m                  ! Entero de clase ``cls``

    a = 1000
    m = 20000000000_cls                     ! Sufijo _cls

En el caso de literales la clase se especifica mediante un sufijo que consiste de
un guión bajo seguido del nombre de la variable de clase, en este caso ``cls``.
Este detalle es importante en una asignación como la anterior, porque de no indicar
la clase del entero obtendremos un error de compilación, ya que la variable ``m``
es de clase ``cls`` y sólo guarda valores de dicho tipo.



Tipo real
-----------

Las variables que guardar números decimales se declaran con el tipo ``real``,
por ejemplo, ``1.0``, ``3.14159`` y ``1.4142`` (nótese que aunque ``1.0`` es
entero, la introducción del punto decimal lo convierte en una cantidad de tipo
``real``). Por lo general una variable de este tipo tiene 4 bytes de memoria,
se le conoce como de precisión simple (en el estándar FORTRAN 77 se declaran de
esta forma) y es equivalente al tipo ``float`` del lenguaje C.

    #!fortran
    real :: x, y
    x = 2.34671
    y = 5.48e22                         ! Notación científica, 5.48 x 10^22

Las cantidades decimales se pueden declarar empleando notación científica base
10. Por ejemplo, el número $5.48 \times 10^{22}$ está representado por la literal
``5.48e22``, donde la cantidades antes y después de la letra ``e`` son la mantisa
y el exponente de la base respectivamente. Ya que Fortran no distingue mayúsculas
de minúsculas la asignación ``y = 5.48E22`` es perfectamente válida.

Internamente la mayoría de las computadoras representa los decimales empleando
la [representación de punto flotante](http://en.wikipedia.org/wiki/Floating_point),
en particular la especificada por el estándar [**IEEE**](http://en.wikipedia.org/wiki/IEEE_754).

Al igual que con el tipo ``integer``, hay varias clases de ``real``, las cuales
se pueden escoger usando la función ``selected_real_kind``:

    #!fortran
    integer, parameter :: cls = selected_real_kind(p=10, r=10)

La función ``selected_real_kind`` acepta dos argumentos: un entero ``p``, que es
la precisión mínima de los real representados por la clase, y un entero ``r``,
que es el exponente decimal mínimo correspondiente a la clase. Se pueden especificar
ambos o sólo uno. En la mayoría de los compiladores habrá al menos dos clases de
real: la que corresponde a la precisión sencilla (``float`` en el lenguaje C), y
otra que corresponde a precisión doble (tipo ``double`` en C), que tiene un tamaño
de 8 bytes. Puede haber una clase adicional que corresponde con el tipo ``long double``
de C, que tiene una longitud de 80 bits de tamaño, mas no en todas las arquitecturas
de computadoras o sistemas operativos. Las tres clases están disponibles en gfortran y
sus características se enlistan a continuación:

* Clase ``4`` (``float``en C). Tamaño de 32 bits, intervalo desde ``1.17e-38`` hasta
``3.40e+38`` en valor absoluto aproximadamente. Precisión de 6 cifras decimales.

* Clase ``8`` (``double`` en C) Tamaño de 64 bits, intervalo desde ``2.22e-308``
hasta ``1.79e+308`` en valor absoluto aproximadamente. Precisión de 15 cifras decimales.

* Clase ``10`` (``long double`` en C) Tamaño de 80 bits, intervalo desde ``3.37e-4932``
hasta ``1.18e+4932`` en valor absoluto aproximadamente. Precisión de 18 cifras decimales.

Para declarar variables reales de una clase particular se procede de la misma forma que
con variables enteras:

    #!fortran
    integer, parameter :: cls = selected_real_kind(p=10, r=10)
    real :: x                                   ! Entero normal
    real(kind=cls) :: y                         ! Entero de clase cls

    y = 5.48E22_cls                         ! Sufijo _cls

De manera similar a las literales de tipo ``integer``, a las literales ``real`` se
les agrega en sufijo compuesto por un guión bajo seguido por la variable de clase.

Al igual que los enteros, los números de punto flotante pueden salir del intervalo
de valores aceptado por su tipo. En esta situación particular se considera que
los números se *han desbordado*, y el resultado se considera infinito. Así,
el valor representado es convertido a ``Infinity``, que es un valor especial
con el que la computadora indica que el número de punto flotante es mayor que cualquiera
que pueda representar un tipo dado. Algunas expresiones que resultan en infinito son dividir entre
cero o evaluar una función como la exponencial para un argumento muy grande. Por
otra parte, hay situaciones cuando una expresión resulta en un valor que no se puede
representar numéricamente; en este caso la cantidad se convierte en un ``NaN``,
*Not a Number*.  Los ``NaN`` resultan de operaciones que involucran otros ``NaN``,
de formas indeterminadas como $0 \times \infty$, $0/0$, $\infty \pm \infty$, o bien
de evaluar funciones matemáticas fuera de su dominio, como la raíz cuadrada de un número
negativo.



Tipo complejo
----------------

Para representar [números complejos](http://es.wikipedia.org/wiki/N%C3%BAmero_complejo)
existe el tipo ``complex``, que consiste una pareja de números de tipo ``real``,
uno para la parte real y otra para la parte imaginaria.

    #!fortran
    implicit none
    complex :: z1, z2

    z1 = (1, 2)                             ! z1 = 1 + 2j
    z2 = (0, 1)                             ! z2 = 1j

El tipo ``complex`` tiene las mismas clases que el tipo ``real``, y tanto la parte
real como la imaginaria son de la misma clase que el complejo como una sola unidad.

    #!fortran
    integer, parameter :: cls = selected_real_kind(p=10, r=10)
    complex(kind=cls) :: z

    z = (1, 2)
    print *, kind(z)
    print *, kind(real(z))                          ! Parte real de z
    print *, kind(aimag(z))                         ! Parte imaginaria de z

Hemos obtenido la clase de ambas partes con la función ``kind``, así se puede comparar
la clase de las partes real e imaginaria con la del complejo. Para obtener la
parte real del complejo existe la función real (que es palabra clave cuando se emplea
en el contexto de una declaración de variables), mientras que la función ``aimag``
hace lo mismo con la parte imaginaria. El módulo de un complejo se calcula con la
función ``abs``. Ya que los elementos que constituyen un complejo son números de
tipo ``real`` los infinitos y ``NaN`` pueden aparecer dentro de una expresión, y/o
como resultado de la misma.



Tipo carácter
-----------------

Caracteres de texto, así como secuencias de ellos, se almacenan en variables de tipo
``character``.

    #!fortran
    implicit none
    character :: single_char                ! Un solo carácter de longitud
    character(len=15) :: message            ! Longitud máxima de 15 caracteres

Las variables ``character`` almacenan un único carácter. Para almacenar una
secuencia de ellos se tiene que especificar una longitud máxima para la variable,
lo cual se logra usando la opción ``len=`` entre paréntesis enseguida de la palabra
clave ``character``, como se muestra en el ejemplo anterior. El texto que ha de
almacenarse en la variable se hace asignando una literal, valga la redundancia,
de tipo ``character``, las cuales son cualquier texto encerrado entre un par de
comillas simples o entre comillas dobles:

    #!fortran
    single_char = "X"                           ! o 'X'
    message = "Hola Mundo"                      ! u 'Hola Mundo'

La comilla inicial, sea simple o doble, debe corresponderse por otra igual al final de
la secuencia de caracteres. Si esto no se cumple se produce un error de compilación.
Esto significa que la secuencia ``"Hola Mundo'`` es una literal inválida, porque
comienza con comillas dobles y termina con comilla simple. En el caso de literales
cuya longitud supera máxima de la variable, la asignación trunca la literal para
que se ajuste a la variable:

    #!fortran
    message = "Cadena de texto muy larga"
    print *, message

Dado que ``message`` es una variable de máximo quince caracteres el valor guardado
será truncado hasta el quinceavo carácter, y el resultado será el siguiente:

    :::
    ~ Cadena de texto

Las variables de tipo ``character`` son secuencias de caracteres, así tengan sólo uno.
Por lo tanto soportan operaciones basadas en índices, partiendo de que cada carácter
está enumerado por un índice entero que empieza en ``1`` en el primer carácter,
hasta la longitud de la variable misma; luego entonces el índice de un carácter es su posición
respecto al inicio de la variable. En el caso de la variable ``message`` la numeración
es la siguiente:

    :::
    Índice:         1  2  3  4  5  6  7  8  9  10  11  12  13  14  15
    Carácter:       C  a  d  e  n  a     d  e       t   e   x   t   o

La naturaleza de las variables ``character`` permite operaciones propias de los arreglos.
Por ejemplo, es posible reemplazar un carácter en particular en función de su
índice. Así que si queremos convertir en mayúscula la primera letra de cada palabra de
la variable ``message`` haríamos lo siguiente:

    #!fortran
    message(8:8) = "D"              ! Reemplaza el 8vo carácter
    message(11:11) = "T"            ! Reemplaza el 11vo carácter
    print *, message

Al ejecutar el programa obtenemos

    :::
    Cadena De Texto

Es posible reemplazar no sólo un carácter, sino una porción completa de la variable.
Nuevamente, esto es propio de las secuencias.

Una operación únicamente disponible para texto es la concatenación, que es la unión
de una o mas cadenas de texto para formar una más grande. El operador de concatenación
es ``//``, y se usa de la siguiente forma:

    #!fortran
    character(len=255) :: str_1, str_2, str_3
    str_1 = "El respeto al derecho ajeno"
    str_2 = " es la paz."
    str_3 = str_1 // str_2             ! Se unen str_1 y str_2 en dicho orden.
    print *, str_3

En este ejemplo la variable ``str_3`` es la unión de ``str_1`` y ``str_2``, en
este orden, y el programa muestra el mensaje ``El respeto al derecho ajeno es la paz.``.
Hay que recalcar que se pueden concatenar variables, literales o cualquier otra
cadena de texto en una misma expresión.

Al igual que con los tipos ``integer`` y ``real`` existen varias clases de tipo
``character``. Estas clases fueron introducidas por el estándar Fortran 2003
(por lo que sólo están disponibles para estándares igual o superiores), y sirven
para indicar la codificación empleada para representar el texto, lo cual
es importante para programas con soporte en múltiples lenguajes. Expliquemos un poco:
los caracteres de texto, que son glifos particulares para cada lenguaje, tienen que
ser convertidos a una secuencia de bytes para ser almacenados en la computadora.
La codificación, que es la representación binaria de las cadenas de texto, debe
asignar un único valor binario a cada carácter, de tal manera que exista una relación
biunívoca entre ambos elementos: de uno de puede obtener el otro y viceversa.
Históricamente se han desarrollado una gran cantidad de codificaciones, entre ellas
la ascii, latin-1, utf-8 y muchas otras para cada lenguaje. En Fortran la codificación
de caracteres predeterminada es ascii, lo cual impacta en aplicaciones multilenguaje
ya que texto con caracteres no latinos o caracteres con elementos diacríticos (ü, á, ñ, por ejemplo)
es manipulado incorrectamente; después de todo ASCII fue inventado pensando en el lenguaje inglés. Así que el estándar
Fortran 2003 introdujo las clases para el tipo ``character`` y la función ``selected_char_kind``
para tratar de solucionar estos inconvenientes. Sin embargo lidiar con codificaciones
de texto es un trabajo sumamente complejo; la mayor parte del tiempo es innecesario
siquiera entrar en detalles en el contexto de una aplicación numérica de Fortran.



Tipo lógico
--------------

El quinto tipo intrínseco del lenguaje es ``logical``. Las variables y literales
de este tipo solamente pueden tener dos valores: ``.true.``, literal que implica un
valor verdadero, o ``.false.``, para un valor falso; nótense los puntos al principio
y al final de las palabras ``true`` y ``false``.

    #!fortran
    logical :: logic_var
    logic_var = .true.                      ! O bien .false.

A diferencia de los otros tipos, el tipo ``logical`` no tiene comportamientos excepcionales,
ya que no hay más de una clase para el mismo; más bien es un tipo muy simple, con
sólo dos valores que tienen sus propios operadores que se mencionaron con anterioridad:
``.and.``, ``.or.``, ``.not.``, ``.eqv.`` y ``.neqv.``.

El resultado de las operaciones lógicas está sujeto a las reglas del
[Álgebra Booleana](http://en.wikipedia.org/wiki/Boolean_algebra_(logic)).


#### Operador ``.and.``

Su resultado es ``.true.`` si ambos operadores son ``.true.``, y ``.false.`` en cualquier
otro caso.

    #!fortran
    print *, .true. .and. .true.            ! T (True)
    print *, .true. .and. .false.           ! F (False)
    print *, .false. .and. .true.           ! F (False)
    print *, .false. .and. .false.          ! F (False)


#### Operador ``.or.``

Su resultado es ``.true.`` si alguno de los operadores es ``.true.``, y ``.false.``
en el caso restante.

    #!fortran
    print *, .true. .or. .true.             ! T (True)
    print *, .true. .or. .false.            ! T (True)
    print *, .false. .or. .true.            ! T (True)
    print *, .false. .or. .false.           ! F (False)


#### Operador ``.not.``.

Operador de negación. Su resultado es el valor complementario del valor sobre el que actúa.

    #!fortran
    print *, .not. .true.                   ! F (False)
    print *, .not. .false.                  ! T (True)


#### Operador ``.eqv.`` and ``.neqv.``

Operadores de equivalencia y no equivalencia, respectivamente. Su resultado indica
si los dos valores comparados son iguales o diferentes.

    #!fortran
    print *, .true. .eqv. .true.            ! T (True)
    print *, .true. .eqv. .false.           ! F (False)

    print *, .false. .neqv. .true.          ! T (True)
    print *, .false. .neqv. .false.         ! F (False)



Variables con tipo implícito
-------------------------------

FORTRAN 77 permite usar una variable sin declararla previamente: es lo que se conoce
como tipo implícito. En este caso el compilador deduce el tipo de una variable en
función de la primera letra de su nombre: si empieza con las letras ``i`` hasta ``n``
es de tipo ``integer``, si empieza con cualquier otra letra es ``real``. Aquí se
puede ver la orientación numérica del lenguaje, pues con tipo implícito todas las
variables son numéricas de manera predeterminada.

    #!fortran
    nvar = 1                                ! Variable entera
    xvar = 23.17                            ! Variable tipo ``real``

En el estándar Fortran 90 integró la instrucción ``implicit none`` para deshabilitar
el tipo implícito y forzar la  declaración de variables. De esta manera el compilador puede detectar errores que de
otro modo pasarían inadvertidos para el programador, dando lugar a *bugs* muy molestos.
No obstante no se eliminó el tipo implícito, sólo que su uso queda desaconsejado
firmemente. Una de los efectos indeseados del tipo implícito es que se pueden usar
variables mal escritas, en las cuales se introdujo un *error de dedo* involuntariamente.

    #!fortran
    f2x = 1.234567
    print *, exp(fx2)

El resultado de este programa es ``NaN``. ¿Por qué razón? La simplicidad del ejemplo
nos deja ver la causa de inmediato, pero lo cierto es que este programa muestra un
error muy común de los programadores novatos: escribir mal los nombres de las
variables. La variable ``fx2`` no se ha declarado, mucho menos inicializado antes de
usarla como argumento de la función exponencial ``exp``. No hay control sobre la
información que hay en la memoria reservada para esta variable inicialmente; en este
caso la información es literalmente basura. El corolario es que este problema sólo
empeora entre más variables se usen. Sin embargo deshabilitando el tipo implícito
hay una diferencia total:

    implicit none
    real :: f2x

    f2x = 1.234567
    print *, exp(fx2)

En un programa donde se deshabilita el tipo implícito el error en este programa no pasa
desapercibido; el compilador muestra un error como el siguiente:

    :::
    print *, exp(fx2)
                    1
    Error: El símbolo 'fx2' en (1) no tiene tipo IMPLICIT

El compilador indica que la variable ``fx2`` no se ha declarado. Si nos equivocamos
al escribir el nombre de una variable estamos seguros de que el compilador nos lo hará
saber. En un programa grande con muchas variables ``implicit none`` convierte al
compilador en un perro guardián que nos alertará ante posibles *bugs*.

