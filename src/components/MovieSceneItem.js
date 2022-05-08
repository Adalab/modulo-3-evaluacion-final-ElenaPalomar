import { Link } from 'react-router-dom';

const MovieSceneItem = (props) => {

  return (

    // 'to' of Link has the 'id' of the clicked element
    <Link 
      to={`/scene/${props.scene.id}`}
      className='scene__link'
      title={props.scene.movie}
    >

      <img src={props.scene.poster} className='scene__poster' alt={props.scene.movie} />
      <h3 className='scene__title'>{props.scene.movie}</h3>
      <p className='scene__fullLine'>{props.scene.fullLine}</p>
      <p className='scene__year'>{props.scene.year}</p>

    </Link>
  );
};

export default MovieSceneItem;