import React from "react";
import Container from "../Container";

function Input({value, changeHandler}) {

  return (
    <Container style={{ margin: 15 }}>
      <div className="bd-example">
        <div className="input-group mb-3">
          <input
            value={value}
            onChange={() => {changeHandler(value)}}
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
