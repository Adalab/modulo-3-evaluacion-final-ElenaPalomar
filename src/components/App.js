import { useEffect } from 'react';
import getApiData from '../services/fetchMoviesApi';
import '../styles/App.scss';

function App() {

  useEffect (()=> {
    getApiData().then(movies => {
      console.log(movies);
    });
  }, []);


  return (
    <div className="App">
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
