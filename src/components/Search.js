import React from 'react';

const Search = (props) => {
    return ( 
        <form>
        <input onChange={props.handleChange} />
        <button onClick={props.handleSearch}>Search</button>
        </form>
     );
}
 
export default Search;