import { useState, useEffect } from 'react';

import getApiData from '../services/fetchMoviesApi';
// Importamos nuestro componente MovieSceneList para poder utilizarlo en App
import MovieSceneList from './MovieSceneList';

import '../styles/App.scss';

function App() {

  // STATES
  // State for API data
  const [movies, setMovies] = useState([]); 


  // useEffect to get API data
  useEffect (() => {
    getApiData().then(dataClean => { 
      setMovies(dataClean);
    });
  }, []);

  


  return (
    <>
    {/* Este es un HTML mínimo para pintar la página con un 'header' con su 'título' */}
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's 
        <span className="uppercase">"wow"</span>
        </h1>
      </header>

      <main className="main">
        {/* Aquí llamamos al componente MovieSceneList porque es donde queremos que se pinte nuestra lista de películas */}
        <MovieSceneList movies={movies}/> {/* Le pasamos por 'props' el arrays de objetos que obtenemos de la API y está almacenado en nuestra variable de estado 'movies' para que luego MovieSceneList pueda pintar esos datos. Creamos una props llamada 'movies' y le asignamos el valor de la variable de estado {movies} */}
      </main>
    </>
  );
}

export default App;
