import React from "react";
import ReactDOM from "react-dom";

import PlayerControlButton from "./PlayerControlButton.js";

class PlayerControls extends React.Component {
  constructor(props) {
    super(props);
  }

  playMusic = () => {
    console.log("Started playing Music");
  };

  render() {
    return (
      <div style={styles.container}>
        <PlayerControlButton onClick={this.shuffle} icon="fa-random" />
        <PlayerControlButton onClick={this.skipBack} icon="fa-backward" />
        <PlayerControlButton
          onClick={this.playMusic}
          icon="fa-play-circle"
          size={{ fontSize: 40 }}
        />
        <PlayerControlButton onClick={this.skipForward} icon="fa-forward" />
        <PlayerControlButton onClick={this.skipBack} icon="fa-retweet" />
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: 100,
    backgroundColor: "#2d2d2d",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 10
  }
};

export default PlayerControls;
