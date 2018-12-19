import React from "react";
import ReactDOM from "react-dom";

import "./../../src/styles.css";

class UserNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.userLoggedIn) {
      return (
        <div className="buttons-div">
          <button
            className="btn btn-primary my-3 my-button"
            style={{
              backgroundColor: "#1db954",
              border: "1px solid #1db954",
              color: "#191414"
            }}
          >
            <i className="fa fa-cloud-download mr-2" />
            Install App
          </button>
          <button
            className="btn btn-primary my-3 my-button"
            style={{
              color: "#FFF"
            }}
            onClick={this.props.logoutUser}
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <div className="buttons-div">
          <button
            className="btn btn-primary my-3 my-button"
            style={{
              backgroundColor: "white",
              color: "#191414"
            }}
          >
            Sign Up
          </button>
          <button
            className="btn btn-primary my-3 my-button"
            style={{
              color: "#FFF"
            }}
            onClick={this.props.loginUser}
          >
            Login
          </button>
          <div className="text-center" style={{ opacity: "0.7" }}>
            <a
              className="nav-link my-link"
              href="#"
              style={{ fontSize: 12, display: "inline" }}
            >
              Cookies
            </a>
            <span className="white">|</span>
            <a
              className="nav-link my-link"
              href="#"
              style={{ fontSize: 12, display: "inline" }}
            >
              Privacy
            </a>
          </div>
        </div>
      );
    }
  }
}

export default UserNav;
