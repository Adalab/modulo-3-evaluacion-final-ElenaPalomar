const MovieSceneItem = (props) => {

  return (

    // Props this function recibe are an object which has the properties needed
    <a href="/" className='scene__link' title={props.scene.movie} target='_blanck'>
      <img src={props.scene.poster} className='scene__poster' alt={props.scene.movie} />
      <h4 className='scene__title'>{props.scene.movie}</h4>
      <p className='scene__fullLine'>{props.scene.fullLine}</p>
      <p className='scene__year'>{props.scene.year}</p>
    </a>
  );
};

export default MovieSceneItem;