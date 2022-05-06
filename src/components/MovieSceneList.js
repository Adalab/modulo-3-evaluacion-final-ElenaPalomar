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
        {renderMovieList}
      </ul>
    </section>
  );
};

export default MovieSceneList;