import React from "react";
import ReactDOM from "react-dom";

import NavLink from "./NavLink.js";
import UserNav from "./userNav.js";

import "./../../src/styles.css";

let songNames = [
  "Sloth's Revenge",
  "Dumpweed",
  "Here I go (Again)",
  "R U Mine?",
  "Mr. Brightside"
];

const recentlyPlayed = (
  <div className="mt-5">
    <p style={{ color: "gray" }}>RecentlyPlayed</p>
    {songNames.map(x => (
      <a className="nav-link my-link" href="#" style={{ fontSize: 14 }}>
        {x}
      </a>
    ))}
  </div>
);

class SpotifySideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav flex-column full-height-nav">
        <h1 className="navbar-brand mb-3 white my-brand">
          <i className="fa fa-spotify mr-3" style={{ fontSize: 45 }} />
          <span className="align-top">Spotify</span>
        </h1>

        <NavLink
          icon="fa-search"
          text="Search"
          switchView={this.props.switchViewSearch}
        />
        <NavLink
          icon="fa-home"
          text="Home"
          switchView={this.props.switchViewHome}
        />
        <NavLink
          icon="fa-stack-overflow"
          text="Library"
          switchView={this.props.switchViewLibrary}
        />

        {this.props.userLoggedIn ? recentlyPlayed : null}

        <UserNav
          loginUser={this.props.loginUser}
          logoutUser={this.props.logoutUser}
          userLoggedIn={this.props.userLoggedIn}
        />
      </nav>
    );
  }
}

export default SpotifySideNav;
