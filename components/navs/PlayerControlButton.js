import React from "react";
import ReactDOM from "react-dom";

class PlayerControlButton extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    size: {
      fontSize: 18
    }
  };

  render() {
    return (
      <a
        onClick={this.props.onClick}
        className="nav-link pl-0 my-link"
        href="#"
      >
        <i
          style={this.props.size}
          className={`my-icon mr-3 my-1 fa ${this.props.icon}`}
        />
      </a>
    );
  }
}

const styles = {
  noFocus: {
    border: "none !important"
  }
};

export default PlayerControlButton;
