import React, { Component, useState, useEffect, useRef } from "react";
import Table from "../Table";
import Container from "../Container";
import TableContext from "../../utils/TableContext";
import Input from "../InputField";

import API from "../../utils/API";
import axios from "axios";
import "./style.css";

function Wrapper() {
  const [employees, setEmployees] = useState([]);
  const [sortedEmployees, setSort] = useState([]);
  const [searchInput, setSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("ascending");

  useEffect(() => {
    API.getEmployees().then((res) => setEmployees(res.data.results));
  }, []);

  function search(rows) {
    return rows.filter(
      (employees) =>
        employees.name.first.toLowerCase().indexOf(searchInput.toLowerCase()) >
          -1 ||
        employees.name.last.toLowerCase().indexOf(searchInput.toLowerCase()) >
          -1 ||
        employees.email.toLowerCase().indexOf(searchInput.toLowerCase()) > -1
    );
  }

  const HandleInput = (e) => {
    return setSearch(e.target.value);
  };

  const SortName = ({sortMethod}) => {

    switch (sortMethod) {

      case "ascending":
        setSortMethod("descending");
        employees.sort((a, b) => (a.name.last > b.name.last ? -1 : 1));
        break;

      case "descending":
        setSortMethod("ascending");
        employees.sort((a, b) => (a.name.last < b.name.last ? -1 : 1))
        break;

      default:
        break;
    }

  };

  return (
    <>
      <Container style={{ border: "solid 1px black" }}>
        <Container style={{ margin: 15 }}>
          <div className="bd-example">
            <div className="input-group mb-3">
              <input
                value={searchInput}
                onChange={HandleInput}
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
        <div>
          <h1> Current Employees</h1>
        </div>
      </Container>
      <Table employees={search(employees)} OnSort={SortName} sortMethod= {sortMethod}></Table>
    </>
  );
}
export default Wrapper;
