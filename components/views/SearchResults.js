import React from "react";
import ReactDOM from "react-dom";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        {!this.props.input ? (
          <p style={styles.fallbackText}>
            <span style={{ fontSize: 30, fontWeight: "bold" }}>
              Search Spotify
            </span>
            <br />
            Find your favorite songs, artists, albums, podcasts and playlists.
          </p>
        ) : null}
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative",
    bottom: 0,
    height: "calc(100vh - 100px)",
    paddingTop: 80,
    display: "flex"
  },

  fallbackText: {
    color: "#FFF",
    margin: "200px auto",
    textAlign: "center",
    opacity: 0.6
  }
};

export default SearchResults;
