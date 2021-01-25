import React, { Component, Fragment } from "react";
import './cardStyles.css'

const Card = (props) => {
  const { children, text, bg } = props;

  return (
    <Fragment>
      <div
        className="card"
        style={{
          background: `linear-gradient(135deg,${bg.from}, ${bg.to})`,
        }}
      >
        <h3 className="card-content">
          {children}
          <br />
          {(Number(text)).toLocaleString()}
        </h3>
      </div>
    </Fragment>
  );
};


export default Card