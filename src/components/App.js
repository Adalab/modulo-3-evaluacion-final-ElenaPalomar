import { useState, useEffect } from 'react';

import getApiData from '../services/fetchMovieScenesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters/Filters';
import MovieSceneDetail from './Routes/MovieSceneDetail';

// Lo primero que hayq ue gacer para trabajar con rutas es importar estos elementos
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router'

import '../styles/App.scss';


function App() {

  // STATES
  // State for API data
  const [scenes, setScenes] = useState([]); 
  // State for input value
  const [filterMovie, setFilterMovie] = useState('');
  // State for select value
  const [filterYear, setFilterYear] = useState('all');


  // useEffect to get API data
  useEffect (() => {
    getApiData().then(dataClean => { 
      setScenes(dataClean);
    });
  }, []);


  // Handle function to collect the values of the input:text and update the state filterMovie
  const handleFilterMovie = (newMovie) => {
    setFilterMovie(newMovie)
  };

  // Handle function to collect the values of the select and update the state filterYear
  const handleFilterYear = (newYear) => {
    setFilterYear(newYear)
  };



  // Esta función sirve para ordenar las películas por orden alfabético. Esta función es un callBack para el método de arrays 'sort', que lo que hacer es comprobar la condición de los 'if' y evaluar el orden de los elementos en función del 'return'
  const orderScenes = (x, y) => { // La comparación se hace, de manera iterativa: x=0, y=1; x=0, y=2; ... x=1, y=0; x=1, y=2; ...
    if (x.movie < y.movie) { // Si el valor de la función (el return) es < 0, entonces ordena 'x.movie' antes que 'y.movie'
      return -1;
    } else if (x.movie > y.movie) { // Si el valor de la función (el return) es > 0, entonces ordena 'y.movie' antes que 'x.movie'
      return 1;
    } else {
      return 0;  // Si el valor de la función (el return) es = 0, mantener el orden original de 'x.movie' y 'y.movie'
    }
  };


  // Function to create the elements for the 'select' dynamically
  const getYears = () => {
    const sceneYears = scenes.map(scene => scene.year);

    // The years cannot be repeated
    const uniqueYearsObject = new Set(sceneYears);
    const uniqueYears = [...uniqueYearsObject];

    return uniqueYears;
  };

  const userfilters = scenes.sort(orderScenes)
    // Function to filter API data by name of the movie
    .filter(scene => scene.movie.toLowerCase().includes (filterMovie.toLowerCase()))

    // Function to filter API data by year, including the case which no year is selected
    .filter(scene => filterYear === 'all' ? true : scene.year === parseInt(filterYear));



    // ROUTES
    // Con 'useLocation' lo que hago es coger la 'url' desde la que me están llamando (a partir de la '/' de hombe, es decir, después de la parte principal). 'pathname' tiene que ser 'pathname' o sino sale 'undefined'
    const { pathname } = useLocation();

    // Creamos una constante 'dataPath' en la que guardamos toda la información de comprar la ruta actual (/:sceneId) con la ruta dinámica (la almacenada en 'pathname'):
    // Si no coinciden --> mathPath me devuelve 'null'
    //Si coinciden --Z mathPath me devuelvo que objeto almacenado en pathname, obtenido de 'useLocation'
    const dataPath = matchPath('/scene/:sceneId', pathname);

    // Guardamos en la constante 'sceneId' el valor que nos da el objeto 'pethname', siguiendo el caminito que nos muestra la consola
    // Me estaba dando un error y no me pintaba nada porque al cargar la página decía que no puede leer la propiedad 'params' de un 'null'. Así que tengo que hacer una validación
    // Importante, de nuevo, el maldito parseInt (como odio trabajar con números). El error era que el 'id' de las escenas es un 'number' porque coincide con el índice del 'map' que le asignamos al pintar los datos (API), pero el 'sceneId' de la ruta es un 'string' (¿por qué todos los malditos datos que nos traemos a JS tienen que ser strings?). Con el parseInt, solucionado
    const sceneId = dataPath !== null ? parseInt(dataPath.params.sceneId) : null;

    // Buscamos en la lista de escenas 'scenes' (sacada de la API, la escena que tengo un 'id' que coincida con el 'id' que hemos obtenido de la ruta)
    const sceneFound = scenes.find(scene =>
      scene.id === sceneId);


  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's 
        <span className="uppercase">"wow"</span>
        </h1>
      </header>

      <main className="main">

        {/* Con 'Routes' le estoy diciendo que voy a tener más de una ruta y que las voy a gestionar con React */}
        <Routes>

          {/* La ruta con la que vamos a trabajar en este caso (Route) tiene dos parámetros: el path --> ruta que quiero gestionar en el momento (en este caso '/' es el 'home') y element --> que es donde guardamos los componentes o el html que quiero pintar cuando llamemos a esta ruta (en este caso <Filters /> y <MovieSceneList />) */}

          <Route path='/' element={
            // 'element' solo admite un hijo (como pasaba con el return de los componentes, así que tenemos que usar fragments (o la etiqueta que queramos) para solucionarlo)
            <>
              <Filters 
                filterMovie={filterMovie}
                filterYear={filterYear}
                handleFilterMovie={handleFilterMovie}
                handleFilterYear={handleFilterYear}
                years={getYears().sort()}
              />
              <MovieSceneList scenes={userfilters}/>
            </>
          } />

          {/* Esta es la otra ruta que quiero pintar, la del detalle de cada escena. El 'path' en este caso es ':' que indica que detrás va a ir un valor variable y 'sceneId' que cuando lo rendericemos, será el 'id' de cada escena. El 'element' sólo queremos pintar un componente, el del detalle de cada escena */}
          <Route path='/scene/:sceneId' element={
            // Le pasamos por 'props' a 'MovieSceneDetail' el valor 'sceneFound' que es el usuario cuyo 'id' coincide con el 'id' de la ruta y esos son los datos que necesita para pintar el detalle.
            <MovieSceneDetail scene={sceneFound}/>
          } />
        </Routes>

      </main>
    </>
  );
}

export default App;
