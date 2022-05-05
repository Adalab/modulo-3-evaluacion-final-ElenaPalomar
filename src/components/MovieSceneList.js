import MovieSceneItem from './MovieSceneItem';

const MovieSceneList = (props) => {
  // Lo que queremos es transformar nuestro array de datos 'movies' que recibimos por 'props' en un arrays de <li>. Para ello tengo que iterar el array de 'movies' y realizar una transformación de cada elemento con un 'map' de dato a <li>. Al final lo que estamos haciendo es pintar los datos que obtenemos de la API
  const renderMovieList = props.movies.map((movies, index) => 
    <li className='movie' key={index}>
      {/* El contenido de cada <li> es el que hemos definido dentro del componente 'MovieSceneList', por tanto, lo que tenemos que hacer aquí es poner este componente dentro del <li> */}
      <MovieSceneItem />
    </li>
  );
  return (
    // El HTML que ponemos aquí es el correspondiente a la lista que queremos tener de elementos, es decir, que MovieSceneList va a devolverme una lista (un <ul>) con sus correspondientes <li>
    <section className='movies'>
      {/* Dentro del <ul> tenemos que pintar nuestros <li>, es decir, tenemos que poner dentro del <ul> nuestro array generado con el 'map'*/}
      <ul className='movies__list'>
        {renderMovieList}
      </ul>
    </section>
  );
};

export default MovieSceneList;