import React, { Component, useState, useEffect, useRef } from "react";
import Table from "../Table";
import Container from "../Container";
import TableContext from '../../utils/TableContext'
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
        employees.name.last.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 ||
        employees.email.toLowerCase().indexOf(searchInput.toLowerCase()) > -1)
  }

  const HandleInput = (e) => {
    console.log(e)
    return(setSearch(e.target.value));
  }

  const HandleSort = (column) => {
    return (API.sortByName(column))
  }

  return (
    <>
      <TableContext.Provider value={employees}>
        <Container style={{ border: "solid 1px black" }}>
          <input
            onChange={HandleInput}
            value = {searchInput}
          ></input>
          <div>
            <h1> Current Employees</h1>
          </div>
        </Container>
        <Table employees={search(employees)} OnSort={HandleSort}></Table>
      </TableContext.Provider>
    </>
  );
}
export default Wrapper;
