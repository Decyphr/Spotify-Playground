import React from "react";
import ReactDOM from "react-dom";

class Album extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };
  }

  handleHover = e => {
    this.setState({
      isHovered: true
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <div
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <a href="#" style={{ textDecoration: "none" }}>
            {this.state.isHovered ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 240,
                  height: 240,
                  backgroundImage:
                    "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))"
                }}
              >
                <i
                  className="fa fa-play-circle fa-4x"
                  style={{ color: "#FFF" }}
                />
              </div>
            ) : null}
            <img style={styles.img} src={this.props.albumArt} />
            <p
              style={{
                marginTop: 10,
                textTransform: "capitalize",
                color: "#FFF"
              }}
            >
              {this.props.albumTitle}
            </p>
          </a>
        </div>
        <a
          href="#"
          style={{ opacity: 0.7, textDecoration: "none", color: "#FFF" }}
        >
          {this.props.artistName}
        </a>
      </div>
    );
  }
}

const styles = {
  container: {
    position: "relative",
    width: 240,
    height: 300,
    margin: 15,
    marginTop: 35,
    marginLeft: 0,
    textAlign: "center"
  },

  img: {
    width: 240,
    height: 240
  }
};

export default Album;
