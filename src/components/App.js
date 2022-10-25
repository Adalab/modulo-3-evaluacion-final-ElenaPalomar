import { useState, useEffect } from 'react';

import getApiData from '../services/fetchMovieScenesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters/Filters';
import MovieSceneDetail from './Routes/MovieSceneDetail';
import ls from '../services/localStorage';

import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router'

import '../styles/App.scss';
import Header from './Header';


function App() {

  // STATES
  // State for API data
  const [scenes, setScenes] = useState(ls.get('scenes', []));
  // State for input value
  const [filterMovie, setFilterMovie] = useState('');
  // State for select value
  const [filterYear, setFilterYear] = useState('all');


  // 'useEffect' to get API data
  useEffect(() => {
    if (scenes.length === 0) {
      getApiData().then(dataClean => setScenes(dataClean));
    }
  }, []);

  // Set dataAPI in ls
  useEffect(() => {
    ls.set('scenes', scenes);
  }, [scenes]);


  // Handle function to collect the values of the input:text and update the state filterMovie
  const handleFilterMovie = (newMovie) => {
    setFilterMovie(newMovie)
  };

  // Handle function to collect the values of the select and update the state filterYear
  const handleFilterYear = (newYear) => {
    setFilterYear(newYear)
  };



  // Callback function for 'sort' to alphabetize scenes by movie
  const orderScenes = (x, y) => {
    if (x.movie < y.movie) {
      return -1;
    } else if (x.movie > y.movie) {
      return 1;
    } else {
      return 0;
    }
  };

  // FILTER BY NAME
  const userfiltersMovies = scenes.sort(orderScenes)
    // Function to filter API data by name of the movie
    .filter(scene => scene.movie.toLowerCase().includes(filterMovie.toLowerCase()))


  // FILTER BY YEAR
  // Function to create the elements for the 'select' dynamically
  const getYears = () => {
    const sceneYears = userfiltersMovies.map(scene => scene.year);

    // The years cannot be repeated
    const uniqueYearsObject = new Set(sceneYears);
    const uniqueYears = [...uniqueYearsObject];

    return uniqueYears;
  };

  const userfilters = userfiltersMovies.sort(orderScenes)
    // Function to filter API data by year, including the case which no year is selected
    .filter(scene => filterYear === 'all' ? true : scene.year === parseInt(filterYear));



  // ROUTES
  // Get pathoute (browser)
  const { pathname } = useLocation();

  // Compare the current route (pathname) with the dynamic route (/scene/:sceneId)
  const dataPath = matchPath('/scene/:sceneId', pathname);

  // Save the variable when the page has already loaded the first data
  const sceneId = dataPath !== null ? parseInt(dataPath.params.sceneId) : null;

  // Finds the match of an element with an 'id' equal id's path
  const sceneFound = scenes.find(scene => scene.id === sceneId);


  return (
    <>
      <Header />

      <main className="main">

        <Routes>

          <Route path='/' element={
            <>
              <Filters
                filterMovie={filterMovie}
                filterYear={filterYear}
                handleFilterMovie={handleFilterMovie}
                handleFilterYear={handleFilterYear}
                years={getYears().sort()}
              />
              <MovieSceneList scenes={userfilters} />
            </>
          } />

          <Route path='/scene/:sceneId' element={
            sceneFound === undefined ?
              <p className='error'>La página a la que estas intentando acceder no existe</p> :
              <MovieSceneDetail scene={sceneFound} />
          } />

        </Routes>

      </main>
    </>
  );
}

export default App;
