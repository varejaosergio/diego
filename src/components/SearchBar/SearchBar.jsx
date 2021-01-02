import React, { useState } from 'react';
import { TextField } from "@material-ui/core";

function SearchBar ({onSubmit}){
    const [term, setTerm] = useState("");

    return (
      <form 
        className='SearchBar'
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
            variant="outlined"
            margin="normal"
            fullWidth
          />
      </form>
    );
}

export default SearchBar;
