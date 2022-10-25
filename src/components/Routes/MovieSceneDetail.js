import '../../styles/layout/movieSceneDetail.scss';

const MovieSceneDetail = (props) => {
  return (
    <section className="sceneDeatils">
      <img src={props.scene.poster} className='sceneDeatils__poster' alt={props.scene.movie} />
      <h2 className='sceneDeatils__title'>{props.scene.movie}</h2>
      <h3 className='sceneDeatils__fullLine'>{props.scene.character}: "{props.scene.fullLine}"</h3>
      <p className='sceneDeatils__fullLine'>Director: {props.scene.director}</p>
      <a href={props.scene.audio} className='sceneDeatils__audio' title='Pulsa aquí para escuchar como suena este "wow"'>Escucha como suena este <span className="uppercase">"wow"</span></a>
    </section>
  );
};

export default MovieSceneDetail;