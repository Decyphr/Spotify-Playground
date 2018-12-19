import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./SearchBar.js";
import SearchResults from "./SearchResults.js";

class SearchView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    e.preventDefault();

    this.setState({
      input: e.target.value
    });
  };

  render() {
    return (
      <div style={container}>
        <SearchBar input={this.state.input} handleChange={this.handleChange} />
        <SearchResults input={this.state.input} />
      </div>
    );
  }
}

const container = {
  backgroundImage: "linear-gradient(#20305B, #191414)",
  height: "calc(100vh - 100px)"
};

export default SearchView;
