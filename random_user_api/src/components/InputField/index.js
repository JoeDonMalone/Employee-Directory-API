import React from "react";
import Container from "../Container";

function Input() {

  return (

    <Container style = {{margin:15}}>
      <div className="bd-example">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
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
