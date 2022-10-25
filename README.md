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

<p align="justify">En un primer momento, la página muestra un listado de 50 escenas donde el actor Owen Wilson ha
dicho 'wow'.</p>
<p align="justify">Para ello, se hace una consulta al API <a href="https://owen-wilson-wow-api.herokuapp.com/" target="_blank">The Owen Wilson WoW API</a> que nos devuelve información de 50 escenas de películas aleatorias.</p>

<h3 id="filtro-película">Filtrar por película 🔍</h3>

<p align="justify">Una vez tenemos el listado de escenas, hay un filtro para buscar la escena por coincidencia del nombre que el usuario escriba en el cuadro de texto con alguna palabra que contenga título de la película.</p>

<h3 id="filtro-año">Filtrar por año 📅</h3>

<p align="justify">Además del cuadro de búsqueda, hay un desplegable con los años por los que se puede filtrar el listado de escenas. Los años que contiene el mismo son los coincidentes con los de las escenas, es decir, si al filtrar por nombre sólo se muestra una escena, también habrá un único año en el desplegable.</p>

<h3 id="detalle">Detalle de las escenas 🎞</h3>

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
- React <img src="./src/images/README/react.png" width=4%/>

<h2 id="autora">✒️ Autora</h2>

- LinkedIn - [elena-palomar](https://www.linkedin.com/in/elena-palomar/)
- GitHub - [ElenaPalomar](https://github.com/ElenaPalomar)
