const FilterYear = (props) => {

  // Execute the 'handleFilterYear' handler function via an 'onChange' event on the select
  const handleChangeSelect = (event) => {
    props.handleFilterYear(event.target.value);
  }

  return (
    <>
      <label htmlFor="year" className="filterYear__title">Filtar escenas por año</label>
      <select 
        className="filterYear__select" 
        name="year" 
        id="year" 
        onChange={handleChangeSelect}
      >
        <option value="all">Selecciona un año</option>
        <option value="2003">2003</option>
        <option value="2007">2007</option>
        <option value="2011">2011</option>
        <option value="2013">2013</option>
        <option value="2015">2015</option>
        <option value="2017">2017</option>
        <option value="2019">2019</option>
      </select>
    </>
  );
};

export default FilterYear;