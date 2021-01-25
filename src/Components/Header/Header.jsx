import React, { Component, Fragment } from "react";
import "./headerStyles.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { backgroundColor: "transparent", boxShadow: "none" },
    };
  }

  scrollListener = () => {
    window.scrollY > 80
      ? this.setState({
          style: {
            backgroundColor: "white",
            boxShadow: "0px 0px 5px 1px #00000050",
          },
        })
      : this.setState({
          style: { backgroundColor: "transparent", boxShadow: "none" },
        });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
  }

  render() {
    return (
      <Fragment>
        <div className="header" style={this.state.style}>
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Header;
