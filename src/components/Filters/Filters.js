import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {

  const handleSubmit = event => event.preventDefault();

  return (
    <section className="filters">
      <form className='filters__form' onSubmit={handleSubmit}>
        {/* Pass the state 'filterMovie' to control the input and handler function 'handleFilterMovie' to collect input:text value */}
        <FilterMovie
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
        />

        {/* Pass the state 'filterYear' to control the select, handler function 'handleFilterYear' to collect selectionated select value, and const 'uniqueYears' (getYears()) to render the 'select' options */}
        <FilterYear
          filterYear={props.filterYear}
          handleFilterYear={props.handleFilterYear}
          years={props.years}
        />
      </form>
    </section>
  );
};

export default Filters;