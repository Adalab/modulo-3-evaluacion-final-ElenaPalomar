// function to fetch API data
const getApiData = () => (

  fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    .then(response => response.json()) 
    .then(data => {

      // Clean API data
      const dataClean = data.map((movie,index) => (

         { 
          id: index,
          poster: movie.poster,
          movie: movie.movie,
          fullLine: movie.full_line,
          year: movie.year,
          character: movie.character,
          director: movie.director,
          audio: movie.audio
        } 

      )); 

      return dataClean;

    })

); 

export default getApiData;
