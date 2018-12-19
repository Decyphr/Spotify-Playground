import React from "react";
import ReactDOM from "react-dom";

import SpotifySideNav from "../components/navs/SpotifySideNav.js";
import PlayerControls from "../components/navs/PlayerControls.js";

import HomeView from "../components/views/HomeView.js";
import SearchView from "../components/views/SearchView.js";
import LibraryView from "../components/views/LibraryView.js";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      userName: "",
      currentView: "Home"
    };
  }

  loginUser = e => {
    e.preventDefault();

    this.setState({
      loggedIn: true
    });
  };

  logoutUser = e => {
    e.preventDefault();

    this.setState({
      loggedIn: false
    });
  };

  render() {
    return (
      <div>
        <SpotifySideNav
          loginUser={this.loginUser}
          logoutUser={this.logoutUser}
          userLoggedIn={this.state.loggedIn}
          switchViewHome={() => this.setState({ currentView: "Home" })}
          switchViewSearch={() => this.setState({ currentView: "Search" })}
          switchViewLibrary={() => this.setState({ currentView: "Library" })}
        />
        <PlayerControls />
        <div style={styles.mainView}>
          {this.state.currentView === "Home" ? (
            <HomeView />
          ) : this.state.currentView === "Search" ? (
            <SearchView />
          ) : (
            <LibraryView />
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  mainView: {
    marginLeft: 250,
    height: "calc(100vh - 100px)",
    width: "calc(100vw - 250px)"
  }
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
