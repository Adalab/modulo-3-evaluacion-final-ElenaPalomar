import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = (props) => {

  // Function to render the list elements
  const renderMovieList = props.scenes.map((scene, index) => 
    <li className='scene' key={index}>
      {/* Pass each object of the state of API array to the MovieSceneItem component with the props 'scene' */}
      <MovieSceneItem scene={scene} />
    </li>
  );

  return (

    <section className='scenes'>
      <ul className='scenes__list'>
        {/* Esto es simplemente un validación para que si no hay niguna película que mostrar en pantalla, se muestre al menos un mensaje de aviso */}
        {renderMovieList.length === 0 ? <li className='scene__error'>No hay ninguna escena de película que coincida con tus datos de búsqueda 😔</li> : renderMovieList}
      </ul>
    </section>
  );
};

export default MovieSceneList;