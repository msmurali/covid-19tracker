import React, { Component, Fragment } from "react";
import "./flexContainerStyles.css";

const FlexContainer = (props) => {
  return (
    <Fragment>
      <div className="wrapper">
        <div className="bg"></div>
        <div className="flex-container">{props.children}</div>
      </div>
    </Fragment>
  );
};

export default FlexContainer;
