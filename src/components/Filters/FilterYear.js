const FilterYear = (props) => {

  // Funtion to render 'select' options with the 'uniqueYears' value
  const renderYears = () => 
    props.years.map((year, index) => 
      <option value={year} key={index}>{year}</option>
    );

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
        value={props.filterYear}
        onChange={handleChangeSelect}
      >
        <option value="all" key='all'>Selecciona un año</option>
        {renderYears()}
      </select>
    </>
  );
};

export default FilterYear;