import React from "react";
import ReactDOM from "react-dom";

import Album from "./Album.js";

class MainView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const albumCollection = this.props.albumData.map(data => (
      <Album
        albumArt={data.albumArt}
        albumTitle={data.albumTitle}
        artistName={data.artistName}
      />
    ));

    return (
      <div style={styles.container}>
        <h1
          style={{
            color: "#FFF",
            fontWeight: "bold",
            textShadow: "0 1px 1px #000"
          }}
        >
          Made for Blake
        </h1>
        <div style={styles.albumContainer}>{albumCollection}</div>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: 40,
    marginTop: 20,
    marginBottom: 100
  },

  albumContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "start"
  }
};

export default MainView;
