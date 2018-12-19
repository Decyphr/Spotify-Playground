import React from "react";
import ReactDOM from "react-dom";

import NavLink from "./NavLink.js";

class MainViewNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const LINKS = this.props.links.map(x => (
      <NavLink styling={styles.navText} text={x} />
    ));

    return <div style={styles.container}>{LINKS}</div>;
  }
}

const styles = {
  container: {
    height: 80,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center"
  },

  navText: {
    fontSize: 13,
    textTransform: "uppercase",
    letterSpacing: 2,
    textShadow: "0 0 1px #000"
  }
};

export default MainViewNav;
