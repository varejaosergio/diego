import React from "react";
import { TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="SearchBar">
        <form 
          onSubmit={this.onFormSubmit}
          className="form"
        >
          <TextField
            label="What to watch?"             
            variant="outlined" 
            margin="normal" 
            fullWidth
          >
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </TextField>
        </form>
      </div>
    );
  }
}

export default SearchBar;
