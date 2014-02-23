Title: Cómputo científico con Python y Anaconda
Date: 2014-02-16 18:00:00
Slug: computo-cientifico-con-python-y-anaconda
Author: O. A. Rodríguez
Email: oarodriguez@live.com.mx
Category: Python
Tags: Programación, Tutoriales
Thumbnail: python-logo
Style: python
Summary: En este artículo hablamos sobre el uso del lenguaje de programación Python para cómputo científico.


[Python][1] es un lenguaje de programación muy popular que se caracteriza por
su filosofía muy particular, en la cual la legibilidad y belleza de un programa
son aspectos muy importantes del mismo. Es un lenguaje muy popular cuya uso abarca
desde el desarrollo web hasta tareas de administración de sistemas, en especial
en distribuciones del sistema operativo [Linux][2].

Desde hace varios años el lenguaje ha ido estableciéndose como una alternativa
completa para el cómputo científico "convencional" y para el de alto desempeño.
Así, se ha creado una amplia colección de software numérico y científico con base
en dos extensiones: [Numpy](http://www.numpy.org/) y [Scipy](/http://www.scipy.org/),
la cual incluye paquetes como [Matplotlib](http://www.matplotlib.org/), 
[IPython](http://www.ipython.org/) y [Mayavi](http://code.enthought.com/projects/mayavi/),
entre muchos otros. Sin embargo, siempre ha sido un reto instalar y ejecutar sin
mayor contratiempo todos estos paquetes en diferentes sistemas operativos, de
tal manera que la portabilidad que en principio caracteriza todos los programas
escritos en Python sea una realidad. 

¿Por qué ha sucedido esto? El software científico generalmente consiste de paquetes que integran elementos
desarrollados en múltiples lenguajes de programación. En el caso de Python esto 
pasa por dos razones: la primera es porque el lenguaje es muy ineficiente para tareas que usan
de manera intensiva las capacidades aritméticas de la CPU de la computadora. La
segunda es porque a través de muchos años, y con el esfuerzo de muchos programadores,
se han desarrollado bibliotecas en lenguajes diferentes a Python, la cuales han estado sujetas a un largo proceso
de pruebas y han demostrado su funcionalidad y estabilidad en múltiples ambientes.
Un ejemplo de esto son las bibliotecas [Netlib BLAS](http://www.netlib.org/blas/), 
[Goto BLAS](https://www.tacc.utexas.edu/tacc-projects/gotoblas2) y su derivado 
[Open BLAS](https://github.com/xianyi/OpenBLAS/wiki/faq), escritas en lenguajes
tan diferentes como C, ensamblador y Fortran. Es claro que sería un despropósito
mayúsculo crear nuevas bibliotecas en Python que hagan lo mismo que las anteriores,
además de poco realista por decir lo menos. Así, es necesario crear interfaces 
para usar estas bibliotecas desde Python, y luego someterlas a pruebas para garantizar
su correcto funcionamiento. Pero no es lo mismo hacer esto en un sistema operativo
como GNU/Linux a hacerlo en Windows o Mac. Para facilitar el proceso anterior se han 
creado herramientas para instalar, compilar y distribuir paquetes de Python. Los ejemplos 
más conocidos son el módulo [distutils](http://docs.python.org/2/library/distutils.html), 
[setuptools](https://pypi.python.org/pypi/setuptools)
y [pip](https://pypi.python.org/pypi/pip). Además se han desarrollado paquetes
como [virtualenv](https://pypi.python.org/pypi/virtualenv) para crear ambientes
aislados con diferentes versiones de una misma biblioteca, que no interfieren
una con la otra. Sin embargo todas estas soluciones tienen un problema en común:
están centradas en Python, y dejan de lado las dependencias ajenas a Python que 
pudiera tener un paquete.

Así, con el paso de los años han surgido múltiples distribuciones de Python que
incluyen una gran variedad de paquetes orientados al cómputo científico y que
vienen "listas para usar". Siempre incluyen paquetes como Numpy, Scipy y Matplotlib,
e integran ambientes de programación como [Spyder](https://code.google.com/p/spyderlib/). 
Algunas de estas distribuciones son:

* [**Pythonxy**](https://code.google.com/p/pythonxy/). Es una distribución centrada
en Windows con decenas de paquetes, lista para instalar y usar, y es gratuita.

* [**Enthought Canopy**](https://www.enthought.com/products/canopy/). Previamente
conocida como **Enthought Python Distribution**, incluye también una gran cantidad
de paquetes, lista para instalar. Tiene una versión gratuita, pero con muchas limitaciones 
en cuanto al número y tipo de paquetes disponibles. Para superar estas limitaciones
hay que comprar una licencia comercial, o bien obtener una licencia académica.

* [**WinPython**](http://winpython.sourceforge.net/). Distribución dirigida a usuarios
de Windows, incluye una gran colección de paquetes. Basta con ejecutar su instalador,
escoger un lugar donde instalarlo y esperar. Es gratuito al igual que Pythonxy.

Desde mi punto de vista hay una distribución que sobresale entre las anteriores por 
la manera en que ataca el problema de la creación y distribución de paquetes, y de la 
cual hablaremos a continuación.


Anaconda Python Distribution
----------------------------------

<div class="text-center">
	<img src="{filename}../images/python/anaconda-logo-web.png" alt="Anaconda Python" class="img-responsive">	
</div>

La distribución [Anaconda][4] de [Continuum Analytics][5] es relativamente reciente, 
pero muy ambiciosa en cuanto al enfoque que toma respecto a la creación y distribución de 
paquetes. Enumeremos algunas de sus características más importantes:

* Es gratuita tanto en su versión de 32 bits como en la de 64 bits, para uso personal
y comercial. Puedes usarla para lo que quieras.

* Tiene versiones para los tres SO más importantes: Windows, Linux y Mac.

* Es una distribución no invasiva, se puede instalar junto a otras versiones
o distribuciones de Python sin mayor problema. Tampoco necesita permisos de
administrador.

* Tiene un administrador de paquetes: [**conda**](http://conda.pydata.org/docs/), 
para instalar, crear y actualizar paquetes y bibliotecas adicionales.

* Cuenta con ambientes aislados con diferentes versiones de múltiples paquetes,
incluyendo a Python mismo: puedes usar Python 2.7 o 3.3 con sólo cambiar
de ambiente.

Además de lo anterior es posible adquirir mejoras y extensiones para la distribución,
como [MKL Optimizations][6], que habilita el soporte para la biblioteca especializada 
Intel&copy; Math Kernel Library para acelerar la ejecución de funciones matemáticas
y de operaciones de álgebra lineal, y [Accelerate][7], que agrega soporte para 
cómputo paralelo en GPUs con Nvidia CUDA, usando solamente código Python, sin necesidad 
de aprender todas las complejidades de CUDA (aunque no por ello se eliminan).

Así, la distribución Anaconda es excelente para adentrarse por primera vez en
el cómputo científico empleando un lenguaje limpio y expresivo como lo es Python.



Instalando Anaconda
------------------------

La instalación de la distribución no podría ser más sencilla, pues para los tres
sistemas operativos se descarga un instalador, se ejecuta de la manera apropiada,
se espera a que se copien los componentes a la ubicación deseada, opcionalmente se 
agrega al ``PATH`` del sistema y listo. 

<div class="row">
	<div class="col-md-6">
		<div class="">
			<a href="{filename}../images/python/anaconda-windows-installer.jpg">
				<img src="{filename}../images/python/anaconda-windows-installer.jpg" class="img-responsive">
			</a>
			<div class="caption">
				<h5>Instalador de Anaconda Python en Windows</h5>
			</div>
		</div>
	</div>
	<div class="col-md-6">
		<div class="">
			<a href="{filename}../images/python/anaconda-python-shell.jpg">
				<img src="{filename}../images/python/anaconda-python-shell.jpg" class="img-responsive">
			</a>
			<div class="caption">
				<h5>Intérprete interactivo de Anaconda Python</h5>
			</div>
		</div>
	</div>
</div>

Lo primero que haremos después de la instalación es es obtener la información elemental de 
nuestra distribución Anaconda. Para esto utilizamos el administrador de ambientes y paquetes **conda**
incluido en la instalación; sin embargo, dependiendo que cómo se haya realizado esta última,
los directorios necesarios para su funcionamiento pueden o no estar en la variable de entorno
``PATH`` del sistema. En Windows y Mac el instalador nos preguntará si queremos agregar
Anaconda al ``PATH``, lo cual es recomendable si queremos utilizarla como nuestra
distribución principal de Python. Luego entonces las herramientas importantes se
podrán usar desde un intérprete de línea de comandos, *aka* una terminal, cualquiera.
Si no lo agregamos tendremos tarea extra:

* En Windows tendremos que abrir el intérprete de línea de comandos de Anaconda, el cual 
existe como un acceso directo en directorio del menú de inicio donde se encuentran 
las herramientas de Anaconda. Esto añade los directorios necesarios al ``PATH``
de manera automática.

<div class="row">
	<div class="col-md-4"></div>
	<div class="col-md-4">
		<div class="">
			<a href="{filename}../images/python/anaconda-windows-menu.jpg">
				<img src="{filename}../images/python/anaconda-windows-menu.jpg" class="img-responsive">
			</a>
			<div class="caption">
				<h5>Intérprete de línea de comandos de Anaconda Python en Windows</h5>
			</div>
		</div>
	</div>
	<div class="col-md-4"></div>
</div>

* En Linux y Mac tendremos que añadir el subdirectorio ``bin`` del directorio donde se
instaló Anaconda al ``PATH``. Lo recomendable es hacerlo desde el archivo ``.bashrc``.

Con Anaconda en el ``PATH`` procedemos a invocar ``conda info``, 

```
$ conda info
Current conda install:

             platform : win-64
        conda version : 3.0.4
       python version : 2.7.6.final.0
     root environment : C:\Users\Omar\Anaconda  (writable)
  default environment : C:\Users\Omar\Anaconda
     envs directories : C:\Users\Omar\Anaconda\envs
        package cache : C:\Users\Omar\Anaconda\pkgs
         channel URLs : http://repo.continuum.io/pkgs/free/win-64/
                        http://repo.continuum.io/pkgs/pro/win-64/
                        https://conda.binstar.org/oarodriguez/win-64/
          config file : C:\Users\Omar\.condarc
    is foreign system : False

```

El comando muestra la información más relevante de nuestra instalación, como
la versión de python utilizada, la plataforma para la cual se creó y la
ruta de instalación. También incluye una lista de URLs, llamadas *canales*
(*channels*) desde las cuales se puede descargar e instalar nuevos paquetes.
Esta es una de las características más importantes de Anaconda, ya que nos permite
crear nuestras propias colecciones de paquetes, la cuales podemos usar de manera
privada, o bien compartir con otros usuarios de Anaconda.



Crear un ambiente virtual
----------------------------

Imaginemos que hemos configurado nuestro Python con una gran variedad de paquetes y
que funciona de una manera casi perfecta. En algún momento el paquete X en su versión
1.0, y del cual dependen otros componentes, es actualizado a la versión 2.0, con muchas 
nuevas características y mejoras. Hacemos lo correcto y actualizamos pensando que todo
mejorará; sin embargo cuando ejecutamos nuestros programas encontramos que muestran 
errores que antes no presentaban. ¿Qué sucedió? Simple: la actualización del paquete 
X ha creado conflictos, ya sea porque tiene *bugs* o porque el software que depende 
de él es incompatible con esta nueva versión. Pues bien, la motivación detrás de 
los ambientes virtuales es la de poder instalar y probar diferentes versiones de un mismo 
paquete en diferentes ambientes aislados de tal forma que los cambios en uno no 
afecten a otro. Así, en el ejemplo que manejamos, la biblioteca X versión 2.0 se 
podría instalar en un ambiente diferente, para no alterar el comportamiento de
otros componentes.

Para crear un ambiente virtual con Anaconda usamos el administrador de
ambientes y paquetes **conda**. Así abrimos una terminal e invocar el comando 
``conda create``,

```
$ conda create -n env01 python=3.3.4

Package plan for installation in environment C:\Users\Omar\Anaconda\envs\env01:

The following packages will be linked:

    package                    |            build
    ---------------------------|-----------------
    python-3.3.4               |                0   hard-link

Proceed ([y]/n)? y

Linking packages ...
[      COMPLETE      ] |#################################################| 100%
#
# To activate this environment, use:
# > activate env01
#
```

En este ejemplo se crea un ambiente de nombre ``env01``, y se ha hecho empleando la opción 
``-n``, que sirve para crear un ambiente a partir de un nombre dado. Con esta opción el
ambiente se guarda en un directorio con el mismo nombre, el cual a su vez se guarda 
dentro del subdirectorio ``envs`` de la ubicación donde se instaló Anaconda.
El último argumento de la invocación del comando, ``python=3.3.4``, le indica a ``conda`` que
ha de instalar Python versión ``3.3.4`` en el nuevo ambiente. Este es un ejemplo de cómo
instalar una versión diferente de Python en un ambiente virtual. Después de esto
``conda`` nos hará una pregunta que habrá que contestar afirmativamente para completar 
la creación del ambiente. 

Una vez creado el ambiente sólo resta activarlo; esta acción realiza pequeños cambios 
reversibles en el ``PATH``, para usar el intérprete de python correspondiente al ambiente 
que se ha de activar. Anaconda tiene dos maneras de activar un ambiente: en Windows se ejecuta

```
$ activate env01
[env01] $ 
```

para activar el recién creado ambiente ``env01``. En Linux y en MacOS la activación 
se hace mediante el comando ``source``:

```
$ source activate env01
[env01] $
```

A partir de este momento el ambiente está activado, y en la línea de comandos debe 
aparecer el nombre del ambiente activo, en este caso es ``env01``, entre corchetes. 
Cuando ejecutemos el interpreté interactivo de python esté será el instalado
en el ambiente ``env01``.

```
[env01] $ python
Python 3.3.4 |Continuum Analytics, Inc.| (default, Feb 10 2014, 17:54:43) [MSC v.1600 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Finalmente, podemos desactivar un ambiente cuando ya no lo vamos a usar más, o bien
cuando necesitamos usar la versión de python instalada de manera predeterminada en el
sistema. Para eso está el comando ``deactivate`` en Windows:

```
[env01] $ deactivate
$
```

o bien ``source`` en Linux y MacOS. 

```
[env01] $ source deactivate 
$
```

Es importante notar que Anaconda siempre cuenta con un ambiente predeterminado que 
no puede ser eliminado; este ambiente de nombre ``root`` corresponde a la instalación
base de Anaconda. Para obtener una lista de todos los ambientes creados en el
subdirectorio ``envs`` ejecutamos

```
$ conda info -e
# conda environments:
#
env01                    C:\Users\Omar\Anaconda\envs\env01
root                  *  C:\Users\Omar\Anaconda
```

El comando nos indicará el ambiente que se encuentra activo con un asterisco a
un costado izquierdo de su ubicación.




Instalar paquetes en un ambiente
---------------------------------------

Ya que tenemos nuestro ambiente activado podemos añadir paquetes nuevos con
el comando ``conda install``, al cual le tenemos indicar el nombre del paquete 
que instalaremos. Así, para instalar [numpy](http://www.numpy.org/) ejecutamos

```
[env01] $ conda install numpy
```

Luego de ejecutar el comando ``conda`` nos indicará donde se
instalará el paquete, otras acciones a realizar, y tendremos que responder
afirmativamente para instalar el paquete. Cuando se complete la instalación
nos lo hará saber claramente.

<div class="row">
	<div class="col-md-2"></div>
	<div class="col-md-8">
		<div class="">
			<a href="{filename}../images/python/anaconda-package-install.png">
				<img src="{filename}../images/python/anaconda-package-install.png" class="img-responsive">
			</a>
			<div class="caption">
				<h5>Instalación de Numpy en un ambiente virtual.</h5>
			</div>
		</div>
	</div>
	<div class="col-md-2"></div>
</div>

Anaconda cuenta con una [lista de paquetes](http://repo.continuum.io/pkgs/index.html) 
muy amplia para descargar e instalar. Usualmente uno no sabe que paquetes están 
disponibles, ni en qué versiones. Para eso está ``conda search``, que busca paquetes 
y muestra su información. Así, podemos buscar la información de numpy mediante

```
[env01] $ conda search numpy
```

El resultado es una lista con todas las versiones de numpy disponibles, algunas
para python 2.6, otras para 2.7 y 3.3. Igualmente podemos buscar información de
otros paquetes por su nombre, sin embargo es posible que muchos no existan
en la base de paquetes de Anaconda.

Si quisiéramos instalar numpy 1.7 tendríamos que indicar la versión explícitamente
de la forma

```
[env01] $ conda install numpy=1.7
```

Si se omite la versión de forma explícita ``conda`` instala la última versión disponible 
del paquete.

De forma predeterminada ``conda install`` añade nuevos paquetes en el ambiente
actualmente activado. Esto puede ser deshabilitado con la opción ``-n`` e indicando
el nombre del ambiente donde se ha de instalar el paquete.

```
[env01] $ conda install -n env02 numpy
```


### Actualizar paquetes

Si queremos actualizar paquetes a su última versión invocamos ``conda update``,
seguido por el nombre del paquete a actualizar.

```
[env01]$ conda update numpy

Package plan for installation in environment C:\Users\Omar\Anaconda\envs\env01:

The following packages will be UN-linked:

    package                    |            build
    ---------------------------|-----------------
    numpy-1.7.1                |           py33_3

The following packages will be linked:

    package                    |            build
    ---------------------------|-----------------
    numpy-1.8.0                |           py33_0   hard-link

Proceed ([y]/n)?
```

Sólo resta confirmar la operación para que se realice.


### Quitar paquetes

Para desinstalar un paquete se utiliza el comando ``conda remove`` seguido
del nombre del paquete a desinstalar.

```
[env01]$ conda remove numpy

Package plan for package removal in environment C:\Users\Omar\Anaconda\envs\env01:

The following packages will be UN-linked:

    package                    |            build
    ---------------------------|-----------------
    numpy-1.7.1                |           py33_3

Proceed ([y]/n)?
```

Nuevamente hay que responder afirmativamente para que la operación se complete. Este
comando también se puede utilizar para eliminar un ambiente completo; en dicho
caso se usa la opción ``--all`` para indicarle a **conda** que queremos quitar
todos los paquetes del ambiente, y éste también.

```
[env01]$ conda remove --all

Package plan for package removal in environment C:\Users\Omar\Anaconda\envs\env01:

The following packages will be UN-linked:

    package                    |            build
    ---------------------------|-----------------
    numpy-1.7.1                |           py33_3
    python-3.3.4               |                0

Proceed ([y]/n)?
```


### ¿Qué hay de ``pip``?

Además de conda es posible utilizar [**pip**](https://pypi.python.org/pypi/pip)
para manejar paquetes en un ambiente virtual. Esto es especialmente útil para
paquetes que no se encuentran en las colecciones de Anaconda. Sin embargo hay 
detalles que atender. Aunque para la mayoría de los paquetes que sólo contienen código 
en python pip funcionará impecablemente, pueden surgir problemas cuando tratemos 
de instalar otros que dependen de alguna biblioteca escrita en C o Fortran. En 
estos casos si no tenemos instalado un compilador con un *runtime* compatible 
con la versión de python que estemos usando  (ya sea el del ambiente principal, 
o bien de algún otro) la extensión, en la mayoría de los casos, simplemente no se instalará.



¿Qué sigue?
----------------

Ahora que sabemos como instalar Anaconda Python, crear ambientes virtuales, así
como instalar, actualizar y quitar paquetes, lo que sigue depende de las necesidades
de cada programador. Anaconda contiene muchos paquetes orientados al cómputo 
científico, pero también tiene otros muy importantes para el desarrollo web. En
el peor de los casos en que el paquete que buscamos no se encuentra en los repositorios
de Anaconda siempre tenemos la opción de indicarle a *conda* una lista de repositorios
adicionales donde buscarlo, o bien crear una *receta* (*recipe*) y construir nuestro 
propio paquete con *conda* también. Este es un proceso más complicado que abordaremos
en un artículo futuro.



[1]: http://www.python.org
[2]: http://es.wikipedia.org/wiki/GNU/Linux
[3]: http://continuum.io/blog/conda
[4]: https://store.continuum.io/cshop/anaconda/
[5]: http://www.continuum.io/
[6]: https://store.continuum.io/cshop/mkl-optimizations/
[7]: https://store.continuum.io/cshop/accelerate/
