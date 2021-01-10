import React, { useState } from 'react';
import { TextField } from "@material-ui/core";

function SearchBar ({onSubmit}){
    const [term, setTerm] = useState("");

    return (
      <div className="SearchBar ui segment">
        <form 
          className='ui form'
          onSubmit = {(event) => {
              event.preventDefault();
              onSubmit({term});
          }}
        >     
          <TextField
            value={term}
            onChange={(event) => {
                setTerm(event.target.value);
            }}
            id="searchBar"
            label="Video Search"
            type="search"
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </form>
      </div>
    );
}

export default SearchBar;
