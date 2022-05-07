import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className="filters">
      <form className='filters__form'>
        {/* Pass the state 'filterMovie' to control the input  with the props 'filterMovie' and handler function to collect the value of the text in the input with the props 'handleFilterMovie' */}
        <FilterMovie
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
        />

        {/* Pass the state 'filterYear' to control the select with the props 'filterYear' and the handler function to collect the value of the selectionated select with the props 'handleFilterYear'. Also pass the 'uniqueYears' (getYears()) to render the 'select' with the props years */}
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