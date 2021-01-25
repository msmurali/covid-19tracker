import React, { Component, Fragment } from "react";

const Container = (props) => {
  return (
    <Fragment>
      <div className="container">{props.children}</div>
    </Fragment>
  );
};

export default Container;
