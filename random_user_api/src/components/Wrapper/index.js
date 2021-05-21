import React, { Component, useState, useEffect } from "react";
import Table from "../Table";
import Container from "../Container";
import Input from "../InputField";

import API from "../../utils/API";
import axios from "axios";
import "./style.css";

function Wrapper() {
  const [employees, setEmployees] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data.results));
  }, []);

  return (
    <>
      <Container style={{ border: "solid 1px black" }}>
      <Input></Input>
        <div>
          <h1> Current Employees</h1>
        </div>
      </Container>
      <Table props={employees}></Table>
    </>
  );
}
export default Wrapper;
// {/*  */}<h1>{employees.toString()}</h1>
