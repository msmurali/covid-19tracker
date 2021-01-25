import React, { Component, Fragment } from "react";
import './templateStyles.css'

class Template extends Component {

  render() {

    const {title, active, confirmed, recovered, deaths} = this.props

    return (
      <Fragment>
        <div className="template">
          <h3 className="title">{title}</h3>
          <p className="template-content">Active : {active}</p>
          <p className="template-content">Confirmed : {confirmed}</p>
          <p className="template-content">Recovered : {recovered}</p>
          <p className="template-content">Deaths : {deaths}</p>
        </div>
      </Fragment>
    );
  }
}

export default Template 