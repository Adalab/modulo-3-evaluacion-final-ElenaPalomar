import FilterMovie from './FilterMovie';
import FilterYear from './FilterYear';

function Filters(props) {
  return (
    <section className="filters">
      <form className='filters__form'>
        {/* Pass the state 'filterMovie' to control the input  with the props 'filterMovie' and handler function to collect the value of the text in the input with the props 'handleFilterMovie' */}
        <FilterMovie
        filterMovie={props.filterMovie}
        handleFilterMovie={props.handleFilterMovie} />

        {/* Pass the handle function to collect the value of the selectionated select with the props 'handleFilterYear' */}
        <FilterYear handleFilterYear={props.handleFilterYear} />
      </form>
    </section>
  );
};

export default Filters;