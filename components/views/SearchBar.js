import React from "react";
import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Start typing..."
        value={this.props.input}
        onChange={this.props.handleChange}
        style={searchBar}
      />
    );
  }
}

const searchBar = {
  width: "100%",
  height: 80,
  border: "none",
  backgroundColor: "#2d2d2d",
  fontSize: 40,
  fontWeight: "bold",
  color: "#fff",
  padding: 20,
  paddingLeft: 50,
  position: "fixed",
  zIndex: 100
};

export default SearchBar;
