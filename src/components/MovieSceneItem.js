// Lo primero como siempre es importar el elemento para poder utilizarlo
import { Link } from 'react-router-dom';

const MovieSceneItem = (props) => {

  return (

    // Props that this function recibe is an object which has the properties needed
    // Queremos dejar de usar <A y usar el componente <Link> que tiene que tener la ruta a donde quieres ir cuando hagas click en este enlace
    // El 'to' del <Link> es la ruta que hemos definido en el 'path' de Route, pero ahora ya no va a ser 'sceneId', ahora vamos a sustituirlo por el identificador de la escena
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