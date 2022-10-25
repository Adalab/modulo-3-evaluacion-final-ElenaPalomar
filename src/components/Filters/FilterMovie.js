const FilterMovie = (props) => {

  // Execute the 'handleFilterMovie' handler function via an 'onChange' event on the input
  const handleChangeInput = (event) => {
    props.handleFilterMovie(event.target.value);
  }

  return (
    <>
      <label htmlFor="movie" className="filterMovie__title">Filtar escenas por película</label>
      <input
        type="text"
        className='filterMovie__text'
        name="movie"
        id="movie"
        value={props.filterMovie}
        onChange={handleChangeInput}
      />
    </>
  );
};

export default FilterMovie;