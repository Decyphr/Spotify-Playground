import React from "react";
import ReactDOM from "react-dom";

import MainViewNav from "../navs/MainViewNav.js";
import MainView from "./MainView.js";

import { libData } from "./albumData.js";

class LibraryView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={container}>
        <MainViewNav
          links={[
            "playlists",
            "made for you",
            "favorite songs",
            "albums",
            "artists",
            "podcasts"
          ]}
        />
        <MainView albumData={libData} />
      </div>
    );
  }
}

const container = {
  backgroundImage: "linear-gradient(#7A4A21, #191414)",
  height: "calc(100vh - 100px)"
};

export default LibraryView;
