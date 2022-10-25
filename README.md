<h1 align="center">🎬 Owen Wilson's"WOW" 🎥</h1>

<h2 id="proyecto">👋 Bienvenid@!</h2>

<p align="justify">Este proyecto consiste en una página web con un listado de 50 escenas de las películas donde el
actor Owen Wilson ha dicho 'wow'. Estas escenas se pueden filtrar por nombre y año y, al hacer click en cada una de ella se podrá ver el detalle ampliado de la misma.</p>

<p align="center">
  <img src="./src/images/README/preview.png" width=60%/>
</p>

####

<h4 id="links">Links 📌</h4>

- [Repositorio en GitHub](https://github.com/ElenaPalomar/owen-wilson-wow)
- [Owen Wilson's"WOW"](https://elenapalomar.github.io/owen-wilson-wow/)

## :bookmark_tabs: Índice

- [El proyecto](#proyecto)
  - [Links](#links)
- [Descripción](#descripcion)
  - [Inicio](#inicio)
  - [Filtrar por película](#filtro-película)
  - [Filtrar por año](#filtro-año)
  - [Detalle de las escenas](#detalle)
  - [Almacenamiento Local](#almacenamiento-local)
  - [Errores](#errores)
- [Requisitos para poder trabajar con el proyecto](#requisitos)
  - [Instalación](#instalacion)
- [Construido con](#construido-con)
- [Autora](#autora)

<h2 id="descripcion">📄 ¿Qué puedes esperar de este proyecto?</h2>

<h3 id="inicio">Inicio 🎬</h3>

<p align="justify">En un primer momento, la página muestra un listado aleatorio de cócteles y un buscador.</p>
<p align="justify">Desde este momento ya se puede realizar una búsqueda del cóctel por el que sientas curiosidad, añadir o quitar cualquiera de los cócteles que se muestran a favoritos y echar un vistazo a los que ya tenía guardados haciendo click en la pestaña que se identifica con un corazón (favoritos).</p>

<h3 id="buscar">Buscar 🔍</h3>

<p align="justify">Al hacer clic sobre el botón de Buscar, la aplicación se conecta al API <a href="https://www.thecocktaildb.com" target="_blank">TheCocktailDB</a> y devuelve un listado de los cócteles que contienen la palabra que el usurio haya escrito en el cuadro de texto.</p>

<h3 id="favoritos">Agregar/quitar de favoritos ❤ / 💔</h3>

<p align="justify">Cada uno de los cócteles que se renderizan tiene un corazón en la esquina superior derecha, en el cual puedes hacer click y señalar que ese cóctel es tu favorito o que ha dejado de serlo. Cuando pulsas el corazón ocurren dos cosas: el cóctel se cambia su apariencia visual y se añade a la lista de favoritos.</p>

<h3 id="lista-favoritos">Listado de favoritos 💟</h3>

<p align="justify">Hasta ahora hemos estado viendo la página principal en la que se ven los cócteles por defecto o los que hemos buscado, pero, si nos desplazamos a la pestaña de favoritos tendremos un listados de cócteles que hemos seleccionado nosotros. Cada uno de éstos tiene un botón para eliminarlo de la lista de favoritos y, al final de la misma, un botón para eliminarlos todos a la vez.</p>

<h3 id="almacenamiento-local">Almacenamiento Local 📲</h3>

<p align="justify">Para que no perdamos nuestra lista de favoritos al recargar la página o al volver a ella después de cerrarla, los datos quedan almacenados en el <em>local storage</em>, o lo que es lo mismo, en el almacenamiento local de nuestro navegador.</p>

<h3 id="errores">Errores ⚠</h3>

<p align="justify">Hay varios errores que pueden ocurrir al navegar por la aplicación web, por lo que se ha buscado una forma de avisar al usuario:
<ul>
  <li>Al obtener los datos de los cócteles, puede haber alguno que no tenga una imagen asociada, por lo que se ha añadido una imagen por defecto para estos casos.</li>
  <li>Cuando el usuario no introduce ningún nombre en el cuadro de texto y presiona el botón de buscar, la página muestra un error indicando al usuario que debe rellenar ese campo para que pueda continuar.</li>
  <li>Lo mismo pasa si el usuario pone un nombre que no coincide con ninguno de los elementos que contiene la base de datos. En ambos caso la página ofrece un botón para volver a la página principal.</li>
  <li>Cuando ocurre un error al pedir los datos al API, ésta nos devuelve un mensaje para intentarlo nuevamente, pues se trataría de un problema de conexión con la misma.</li>
</ul>
</p>

<h2 id="requisitos">📝 Requisitos para poder trabajar con el proyecto</h2>

<p align="justify">Para poder trabajar con este proyecto, además de clonar o descargar el mismo, hay que tener en cuenta que utiliza un conjunto de paquetes o librerias diseñado por Adalab.</p>

<h3 id="instalacion">Instalación ⚙️</h3>

<p align="justify">Lo primero que debes hacer es escribir en la consola, dentro de la carpeta en la que se encuentra el proyecto:</p>

`npm install`

<p align="justify">pues que las dependencias que necesitas ya están referidas en el archivo <code>package.json</code> y sólo debes instalarlas en tu entorno local.</p>

<p align="justify">Para previsualizar los cambios que vayas realizando tendrás que escribir el siguiente código en la consola:</p>

`npm start`

<p align="justify">que abrirá la aplicación web en una nueva pestaña de tu navegador predeterminado.</p>

<p align="justify">Finalmente, para subir los cambios realizados a un servidor, se recomienda actualizar la versión de producción de nuestro proyecto que se encuentra en la carpeta <code>docs</code>. Para ello, usamos el comando:</p>

`npm run docs`

<p align="justify">que borra la carpeta anterior con el mismo nombre (si la había) y la vuelve a crear de nuevo con el proyecto actualizado.</p>

<h2 id="construido-con">🛠️ Construido con</h2>

- HTML5 <img src="./src/images/README/HTML5.png" width=3%/>
- Sass <img src="./src/images/README/sass.png" width=3%/>
- Flexbox
- Diseño _responsive_
- Flujo de trabajo _Mobile-first_
- JavaScript <img src="./src/images/README/JS.png" width=4%/>
- Gulp <img src="./src/images/README/gulp.png" width=2%/>

<h2 id="autora">✒️ Autora</h2>

- LinkedIn - [elena-palomar](https://www.linkedin.com/in/elena-palomar/)
- GitHub - [ElenaPalomar](https://github.com/ElenaPalomar)
