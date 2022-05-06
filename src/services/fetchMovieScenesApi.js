// function to fetch API data
const getApiData = () => (

  fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
    .then(response => response.json()) 
    .then(data => {

      // Clean API data
      const dataClean = data.map((scene,index) => (

         { 
          id: index,
          poster: scene.poster,
          movie: scene.movie,
          fullLine: scene.full_line,
          year: scene.year,
          character: scene.character,
          director: scene.director,
          audio: scene.audio
        } 

      )); 

      return dataClean;

    })

); 

export default getApiData;
