Title: Aprendiendo Fortran. Introducción
Date: 2014-01-16 18:00:00
Slug: aprendiendo-fortran-introduccion
Author: O. A. Rodríguez
Email: oarodriguez@live.com.mx
Category: Fortran
Tags: Programación, Curso de Fortran
Thumbnail: fortran-logo
Style: blue
Summary: Ésta es la primera parte del curso de Fortran, en el cual aprenderás a programar en este lenguaje desde cero.


Fortran es un lenguaje de programación especialmente diseñado para realizar
cálculos numéricos, a fin de explotar al máximo las capacidades aritméticas
de todo tipo de computadoras, desde PC’s caseras hasta supercomputadoras. Su
nombre es una abreviación: *Formula Translating System*, que hace referencia
al nicho al cual se dirige el lenguaje: a científicos e ingenieros que requieren
un lenguaje fácil de usar, pero poderoso. Históricamente, Fortran comenzó como
un lenguaje diseñado para escribirse en tarjetas perforadas usadas por la
computadora mainframe IBM 704. Hoy en día se le conoce como FORTRAN I a esta
versión del lenguaje. Subsecuentes versiones fueron lanzadas (II, III y IV),
la cuales añadían nuevas características. El lenguaje fue estandarizado en 1966
por la Asociación de Estándares de los Estados Unidos (American Standards
Association). Para el año de 1978 el comité aprobó una nueva versión del
lenguaje, FORTRAN 77, la cual mejoraba el soporte para la programación
estructurada, además de añadir nuevas características. De entre varias
versiones del lenguaje que existían (como Minnesota FORTRAN), FORTRAN 77 se
convirtió en la más importante, y así se mantuvo durante casi dos décadas.
El constante desarrollo de las prácticas de programación llevó a la publicación
de un nuevo estándar: Fortran 90 (ANSI, 1992), con la cual el lenguaje
implementó muchas novedades: por primera vez se permitió el desarrollo de
programas en formato libre, además de que se permitía escribir las palabras
claves en minúsculas, y la longitud de los identificadores podía ser de hasta
31 caracteres, entre muchas otras mejoras más. Por otra parte, Fortran 90 no
quitó ninguna característica de FORTRAN 77, de tal manera que código antiguo
pudiera ser reutilizado sin cambio alguno; no obstante sí marco algunas como
obsoletas, condenadas a desaparecer en futuras versiones. Pocos años después
emergió Fortran 95 (ISO/IEC 1539-1:1997), que resultó ser una revisión menor
del lenguaje, añadiendo varias extensiones dirigidas al computo en paralelo de
acuerdo a la especificación de Fortran para Alto Desempeño (High Performance
Fortran, HPF). Siguiendo su evolución, Fortran 2003 (ISO/IEC 1539-1:2004), fue
publicado como una revisión mayor del lenguaje que añadía numerosas
características: introdujo el soporte para la Programación Orientada a Objetos:
herencia, polimorfismo y encapsulación, se incorporó soporte para la aritmética
de punto flotante IEEE 754-2008 y para el manejo de excepciones de punto
flotante, y se implementó la interoperabilidad con el lenguaje de programación
C. La revisión más reciente del lenguaje, Fortran 2008 (ISO/IEC 1539-1:2010),
aprobada en 2010, es a Fortran 2008 lo que Fortran 95 a Fortran 90: una revisión
menor, que incluye correcciones y algunas pocas Habiendo sido usado por más de
50 años, y elegido como el lenguaje de-facto para el computo científico, existe
una inmensa cantidad de código en Fortran, el cual se sigue utilizando en los
cómputos más intensivos: simulaciones del clima y del estado del tiempo,
dinámica de fluidos, álgebra lineal, física computacional, etc. Algunas de las
piezas de software más optimizadas para el computo numérico, como las
bibliotecas BLAS (Basic Linear Algebra Subroutines) ATLAS y Netlib BLAS, así
como LAPACK, emplean Fortran sustancialmente. Esto, en conjunto con la gran
base de código existente, a la facilidad de aprendizaje del lenguaje, a la
gran calidad de los compiladores tanto comerciales como gratuitos, a que el
lenguaje tiene estructuras de datos ampliamente superiores a las de otros
lenguajes comparables (C, C++), y por supuesto, a las características que se
le agregan con cada versión, garantizan que Fortran seguirá siendo el lenguaje
de la programación de alto rendimiento y para el cómputo científico.



Comenzando con Fortran 90
-----------------------------

Programar, independientemente del lenguaje, es más agradable si se usan las
herramientas adecuadas. ¿Y qué se entiende por herramientas adecuadas? Son
aquellas hechas para cumplir una tarea dada de la manera más rápida, fácil y cómoda.
Para programar con Fortran de esta manera se necesitan solamente dos herramientas:
un buen editor de texto y un compilador.


### Editores de texto

Un programa inicia como un conjunto de archivos con una serie de instrucciones
escritas en texto plano denominados *código fuente*. En comparación con los
archivos con texto enriquecido que que usan ciertos paquetes de software como
Microsoft Word o Libre Office, el texto del código fuente no tiene ningún tipo
de formato: no hay títulos, cabeceras, texto en negritas, etc. Dentro del código,
sin embargo, hay porciones de código que definen la estructura del programa,
y otras sirven para definir información: números, letras y caracteres de
puntuación. Visualizar la estructura del código fuente es esencial para
programar, y para esto se requiere un editor que brinde facilidades para verla.
La siguiente es una lista no exhaustiva de dichas facilidades:

* **Coloreado de sintaxis**: los elementos aparecen con diferente color y/o
énfasis de acuerdo a la función que desempeñan y de acuerdo al lenguaje de
programación usado.

* **Números de línea**: para cada línea de texto se muestra el número correspondiente.

* **Sangrado automático**: el editor sangra el código en función del contexto en
el se está escribiendo.

* **Fragmentos de código**: para escribir código frecuentemente usado una abreviación.

Hay muchos editores de texto muy buenos para todos los sistemas operativos
principales: Linux, Windows y MacOS. No todos son muy buenos cuando se trata de
Fortran, ya que el lenguaje no es muy popular en ambientes no científicos o
ingenieriles. Entre los editores recomendados se encuentran:

* [**Sublime Text**](http://www.sublimetext.com/). Excelente editor de texto
multiplataforma, muy extensible, elegante y rápido. Su extensibilidad permite
crear paquetes para lenguajes que el editor no soporta por defecto, como es el
caso de [Fortran][1]. Además es muy
personalizable, pues tiene una gran variedad de temas que cambian la apariencia
según las preferencias del usuario. El software tiene versiones para Windows,
Linux y MacOS, y es de paga aunque por el momento se puede usar la versión de
evaluación por un tiempo indefinido.

* [**gedit**](http://projects.gnome.org/gedit/). Este es el editor predeterminado
del entorno de escritorio Gnome en Linux: distribuciones como Ubuntu, Fedora y
Debian tienen este entorno como base. gedit es un editor muy extensible, cuenta
con una gran cantidad de plugins y un buen soporte para Fortran sin tener que
instalar paquetes adicionales, incluyendo fragmentos de código. Es software libre,
ya que está licenciado bajo la GNU General Public License (GPL). Aunque el editor
es parte básica del ecosistema Linux, existe una versión para Windows y otra para MacOS.

* [**Notepad++**](http://notepad-plus-plus.org/). Editor muy conocido y recomendado
para Windows, es una de las mejores opciones para este sistema operativo. Parece que sólo
tiene soporte para FORTRAN 77, pero se pueden crear nuevas definiciones para versiones
más recientes. El editor cuenta con temas para cambiar su apariencia y una extensa
variedad de plugins. Al igual que gedit es software libre.

* [**TextMate**](http://macromates.com/). Un excelente editor para el sistema
operativo MacOS, y que ha servido de inspiración para otros editores. Tiene
características como temas y paquetes extras al igual que Sublime Text, y de manera
similar a este último se obtiene soporte para Fortran al instalar el paquete
[Sublime Text Fortran Bundle][1], pues los paquetes de TextMate pueden ser usados
por Sublime Text. Durante mucho tiempo el editor fue un proyecto de código cerrado,
pero en agosto de 2012 el proyecto fue liberado bajo la licencia GPL.

* [**intype**](http://inotai.com/intype/). Un editor con una interfaz muy sencilla
y elegante, con soporte para temas y la posibilidad de agregar soporte a lenguajes
adicionales. No cuenta con soporte para Fortran por defecto pero se puede crear
una definición para el lenguaje según [este enlace][2]. Es un editor de código
cerrado, aunque se puede usar su versión de prueba de manera indefinida.

A esta lista podemos agregar otros editores como [emacs](http://www.gnu.org/software/emacs/) o
[vim](http://www.vim.org/), igual de capaces los anteriores pero con una curva de
aprendizaje más pronunciada.


[1]: https://github.com/textmate/fortran.tmbundle
[2]: https://code.google.com/p/intype/source/browse/branches/devel/bundles_extended/Fortran.itBundle/syntaxes/fortran.itGrammar?r=71



### Entornos Integrados de Desarrollo (IDE)

Existen programas que además de integrar las características de un editor de texto
incluyen capacidades para inspeccionar el código, compilarlo y enlazarlo, herramientas
para depuración, sistemas de control de versiones (VCS), incluso para documentarlo
y transferirlo de un ambiente de desarrollo a otro de producción (deploy). A este
tipo de software se le denomina como *Entorno Integrado de Desarrollo*, o IDE.
Los mayores inconvenientes de estos programas es su gran tamaño y elevado consumo
de memoria, además de ser más lentos que los editores de texto.

* [**Eclipse**](http://www.eclipse.org/). Este es un IDE multiplataforma escrito
en el lenguaje de programación Java. Usada típicamente para desarrollar aplicaciones
en dicho lenguaje, existen versiones para desarrollar en lenguajes como C y C++.
Se puede agregar soporte para Fortran mediante la instalación de [Photran][3],
una extensión basada en la versión de Eclipse para C/C++, con lo que se se obtiene una
IDE completa para el desarrollo de aplicaciones complejas, con capacidades de
refactorización (refactoring) y depuración, y soporte para una gran variedad de compiladores.

* [**Code::Blocks IDE for Fortran**](http://darmar.vgtu.lt/) es un IDE basado
en el popular IDE Code::Blocks (el cual está orientado al desarrollo en C/C++)
modificado para agregar soporte para Fortran. Tiene capacidades similares a
Photran, aunque en un tamaño más reducido, y está más integrado con los compiladores
GNU gfortran y gcc/g++.

* [**Force**](http://lepsch.blogspot.mx/): Es un IDE muy ligero para Fortran 90 que
integra los compiladores gfortran y g95. No tiene tantas características como los IDE anteriores.

El uso de un IDE puede resultar innecesario en muchas casos, por ejemplo, cuando se
tienen programas de un único archivo; en tales casos es recomendable usar un editor de texto.

[3]: http://www.eclipse.org/photran/



### Compiladores

El código fuente contiene el cuerpo del programa con instrucciones que los seres
humanos podemos entender, sin embargo la computadora sólo entiende el lenguaje
binario, por lo que debemos traducir el código fuente a código que la
computadora pueda entender. A este proceso se le llama compilación y a los
programas que lo realizan se les denomina compiladores. En concreto la
compilación es la traducción de instrucciones en un lenguaje de programación a
otro conjunto de instrucciones en otro lenguaje, cuyo resultado es
equivalente. Algunos compiladores traducen a código máquina que la computadora
entiende directamente, otros traducen a un tipo de código intermedio llamado
*bytecode*, el cual no es ejecutable por la computadora directamente sino por
otro tipo de programa llamado máquina virtual, pero que es independiente de la
computadora en la cual se genera, a diferencia del código máquina que es único
para cada tipo de arquitectura computacional.

Fortran es un lenguaje para aplicaciones numéricas de alto desempeño que debe
ser compilado a código máquina para para ejecutarse. Para ello existen una
amplia variedad de compiladores, la mayoría de ellos comerciales, algunos de
los cuales se enlistan a continuación:

* [**gfortran**](http://gcc.gnu.org/fortran/). El compilador para Fortran de la colección de compiladores GNU
(GCC) es software libre, es el reemplazo del compilador g77 y la primera opción
para los usuarios del sistema operativo Linux. gfortran incluye soporte
completo para Fortran 95, así como gran parte de los estándares Fortran 2003 y
Fortran 2008. El compilador puede instalarse en el sistema operativo Windows
como parte del paqueteMingw junto con otros compiladores GNU como gcc y g++, y
en MacOS desde [http://hpc.sourceforge.net/](http://hpc.sourceforge.net/).

* [**g95**](http://www.g95.org/). Es un compilador que implementa el estándar Fortran 95 y parte del
estandar Fortran 2003, que sirvió como punto de partida para el desarrollo de
gfortran, ya que este último es una bifurcación de g95 en 2003. El compilador
funciona en múltiples arquitecturas y sistemas operativos.

* [**Intel® Fortran Compiler**](http://www.absoft.com). Intel® ofrece un conjunto de herramientas para
programación de alto desempeño con Fortran, conocidas como Intel® Fortran
Composer XE 2012 en Linux y Mac, y Intel® Visual Fortran Composer XE 2013 en
Windows. El compilador de Intel® está enfocado a procesadores de esta
compañía, aunque también pueden generar código para máquinas AMD. Incluye
soporte para casi todo el estandar Fortran 2003 y gran parte de Fortran 2008.
Es un compilador comercial con un elevado precio de compra, aunque puede
descargarse para Linux sin costo alguno bajo una licencia de uso no comercial.

* [**Oracle Solaris Studio**](http://www.oracle.com/technetwork/server-storage/solarisstudio/overview/index.html). Es un conjunto de herramientas que incluye
compiladores para C, C++ y Fortran, un IDE y depurador, entre otras. Puede
instalarse en los sistema operativos Solaris OS y Linux.

* [**Absoft Pro Fortran Suite**](http://www.absoft.com). Es un conjunto de herramientas y compilador para Fortran disponible para Windows, Linux y MacOS, con soporte para muchas pares del estandar Fortran 2003. Es software comercial y de código cerrado.

* [**Silverfrost FTN95**](http://www.silverfrost.com/default.aspx). Es un compilador para Windows para crear programas
con el estándar Fortran 95 de manera tradicional, es decir, que se ejecutan
desde la línea de comandos, o bien integrándolos con .NET, el marco de
desarrollo de Microsoft para aplicaciones Windows. Es software comercial,
aunque tiene una versión de uso personal que es gratuita que muestra un
anuncio cada vez que se ejecuta un programa.

* [**NAG Fortran Compiler**](http://www.nag.co.uk/). El compilador de Fortran del Numerical Algoritms
Group es una implementación completa del estándar Fortran 95, así como casi
todo el estándar Fortran 2003 y partes de Fortran 2008.

Otras opciones son [PathScale® EKOPath Compiler Suite](http://www.pathscale.com/ekopath-compiler-suite), que incluye compiladores
para C, C++ y Fortran 90/95 y 2003/2008 y soporte para arquitecturas Intel® y
AMD, y PGI Workstation, de [The Portland Group](http://www.pgroup.com/), que incluye compiladores para
C/C++ y Fortran y otras herramientas para cómputo científico.


## Uso básico de gfortran

Comencemos a escribir nuestro primer programa, para lo cual tomaremos el siguiente fragmento de código, lo copiaremos y lo guardaremos en un archivo llamado ``holamundo.f95``:

    :::fortran
    program Main
        print *, "Hola Mundo"
    end program Main

Vale decir que este ejemplo es la versión en Fortran del programa “Hola mundo”,
usado frecuentemente para presentar un nuevo lenguaje al usuario. Es un programa
muy sencillo que lo único que hace es escribir en la terminal el texto
“Hola Mundo” y se cierra de inmediato. Para verlo en acción hay que compilarlo y
luego ejecutarlo. Desde una terminal en Linux y MacOS procedemos de la siguiente
manera:

    ::
    ~ gfortran holamundo.f95
    ~ ./a.out

mientras que en Windows procederíamos así:

    ::
    ~ gfortran holamundo.f95
    ~ ./a.out

El primer comando invoca el compilador, en este caso gfortran, y se deja un
espacio entre el compilador y el nombre del archivo a compilar. El resultado es
un archivo ejecutable de nombre ``a.out`` en Linux/Mac y ``a.exe`` en Windows.
El segundo comando ejecuta dicho archivo, con la diferencia que en Linux el
nombre del ejecutable va precedido por los caracteres ``./``. El caracter ``~``
en Linux y ``>`` en Windows indican que estamos en una sesión de la terminal,
ya que dichos caracteres son los que se muestran en las terminales de ambos
sistemas. Sin embargo aquí nos limitaremos a la primera forma, y asumiremos que
el nombre de archivo de salida por defecto es ``a.out``, aunque se entiende que
en Windows será ``a.exe``.

El resultado de ejecutar dichos comandos luce así:

    ::
    Hola Mundo

Cuando se quiere compilar programas de un solo archivo esta es la manera más
simple de hacerlo. Se puede invocar ``gfortran`` de otra forma para que el
programa ejecutable tenga otro nombre diferente a ``a.out/a.exe``:

    ::
    ~ gfortran holamundo.f95 -o holamundo.out

En este caso después del nombre del archivo a compilar se deja un espacio y se
escribe ``-o``, se deja otro espacio y se escribe el nombre que queremos que
tenga el programa ejecutable final (``holamundo.out``). Entonces para ejecutarlo
escribiríamos:

    ::
    ~ ./holamundo.out

El texto ``-o`` es una opción que indica que el texto que le sigue es el nombre
del archivo ejecutable de salida.
