import React from "react";
import "./style.css";
import API from '../../utils/API'

function SortBtn(props) {

  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={`btn btn-${props.flavor}`}
    >{props.Heading}</button>
  );
}

export default SortBtn;
