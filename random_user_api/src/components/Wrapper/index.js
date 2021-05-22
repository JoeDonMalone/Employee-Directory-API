import React, { Component, useState, useEffect, useRef } from "react";
import Table from "../Table";
import Container from "../Container";
import Input from "../InputField";

import API from "../../utils/API";
import axios from "axios";
import "./style.css";

function Wrapper() {
  const [employees, setEmployees] = useState([]);
  const [sortedEmployees, setSort] = useState([]);
  const [searchInput, setSearch] = useState("");

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data.results));
  }, []);

  function search(rows) {
    return rows.filter(
      (employees) =>
        employees.name.first.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        employees.name.last.toLowerCase().indexOf(searchInput.toLowerCase()) > -1||
        employees.email.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
  }

  return (
    <>
      <Container style={{ border: "solid 1px black" }}>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={searchInput}
        ></input>
        <div>
          <h1> Current Employees</h1>
        </div>
      </Container>
      <Table props={search(employees)} onClick={API.sortByName}></Table>
    </>
  );
}
export default Wrapper;
