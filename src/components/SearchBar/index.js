import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core";

function SearchBar ({onSubmit}){
    const [term, setTerm] = useState("");

    return (
        <form 
            className='Form'
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
                label="Search Bar"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
            >
                Search
            </Button>
        </form>
    );
}

export default SearchBar;