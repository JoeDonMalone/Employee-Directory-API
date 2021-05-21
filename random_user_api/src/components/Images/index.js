import React, { Component } from "react";
import './style.css'

function Image(props) {
  return (
    <img className="img" src={props.picture} alt="Employee" />
  );
}

export default Image;
