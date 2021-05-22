import React from "react";
import Container from "../Container";

function Input(props) {

  return (
    <Container style={{ margin: 15 }}>
      <div className="bd-example">
        <div className="input-group mb-3">
          <input
            value={props.input}
            onChange={props.SetSearchInput}
            name="input"
            type="text"
            className="form-control"
            placeholder="Employee Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          ></input>
        </div>
      </div>
    </Container>
  );
}

export default Input;
