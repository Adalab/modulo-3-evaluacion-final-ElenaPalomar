import { useState, useEffect } from 'react';

import getApiData from '../services/fetchMovieScenesApi';
import MovieSceneList from './MovieSceneList';

import '../styles/App.scss';

function App() {

  // STATES
  // State for API data
  const [scenes, setScenes] = useState([]); 


  // useEffect to get API data
  useEffect (() => {
    getApiData().then(dataClean => { 
      setScenes(dataClean);
    });
  }, []);


  return (
    <>
      <header className='header'>
        <h1 className='header__title'>Owen Wilson's 
        <span className="uppercase">"wow"</span>
        </h1>
      </header>

      <main className="main">

        {/* Pass state of API to the MovieSceneList component with the props 'scenes' */}
        <MovieSceneList scenes={scenes}/> 

      </main>
    </>
  );
}

export default App;
