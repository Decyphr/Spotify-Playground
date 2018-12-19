import React from "react";
import ReactDOM from "react-dom";

import "./../../src/styles.css";

class NavLink extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    styling: {},
    icon: ""
  };

  render() {
    return (
      <a
        onClick={this.props.switchView}
        className="nav-link pl-0 my-link"
        href="#"
        style={this.props.styling}
      >
        <i className={"my-icon mr-3 my-1 fa " + this.props.icon} />
        {this.props.text}
      </a>
    );
  }
}

export default NavLink;
