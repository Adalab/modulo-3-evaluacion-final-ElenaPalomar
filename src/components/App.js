import { useState, useEffect } from 'react';

import getApiData from '../services/fetchMovieScenesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters/Filters';

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


  const userfilters = scenes
    // Function to filter API data by name of the movie
    .filter(scene => scene.movie.toLowerCase().includes (filterMovie.toLowerCase()))

    // Function to filter API data by year, including the case which no year is selected
    .filter(scene => filterYear === 'all' ? true : scene.year === parseInt(filterYear));


  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's 
        <span className="uppercase">"wow"</span>
        </h1>
      </header>

      <main className="main">

        {/* Pass the state 'filterMovie' to control the input with the props 'filterMovie', handler functions to collect the value of the text in the input with the props 'handleFilterMovie' and the value of the selectionated select with the props 'handleFilterYear' */}
        <Filters 
          filterMovie={filterMovie}
          handleFilterMovie={handleFilterMovie}
          handleFilterYear={handleFilterYear} 
        />

        {/* Pass const 'userfilters' to the MovieSceneList component with the props 'scenes' */}
        <MovieSceneList scenes={userfilters}/>

      </main>
    </>
  );
}

export default App;
