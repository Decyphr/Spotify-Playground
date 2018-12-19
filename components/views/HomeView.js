import React from "react";
import ReactDOM from "react-dom";

import MainViewNav from "../navs/MainViewNav.js";
import MainView from "./MainView.js";

import { homeData } from "./albumData.js";

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={container}>
        <MainViewNav
          links={[
            "feaured",
            "podcasts",
            "charts",
            "genres & moods",
            "new releases",
            "discover"
          ]}
        />
        <MainView albumData={homeData} />
      </div>
    );
  }
}

const container = {
  backgroundImage: "linear-gradient(#938704, #191414)",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  height: "calc(100vh)",
  overflowY: "scroll",
  overflow: "none"
};

export default HomeView;
