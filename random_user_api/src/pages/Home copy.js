import React, { useState, useEffect } from "react";
import Container from "../components/Container";
// import Card from "../components/Card";
import SearchBtn from "../components/FunctionalBtn";
import API from "../utils/API";
import Table from "../components/Table";

function BuildTable(apiResponseObject) {
  const [headers, setheader] = useState([]);
  const [rows, setRows] = useState([]);

    // Load all users and store them with setColumns
  useEffect(() => {
    loadTable();
  }, []);

  function loadTable() {
    dataRows.push(apiResponseObject.data.results);
    console.log("dataRows: ", dataRows[0]);
    let singleDataRow = {};
    dataRows[0].forEach((item) => {
      singleDataRow.name = item.name;
      singleDataRow.gender = item.gender;
      singleDataRow.dob = item.dob;
      singleDataRow.age = item.dob.age;
      rowData.push(singleDataRow);
    });
    
    console.log();
  }

  return(
    <Container
    style={{
      border: "solid 1px purple",
      justifyContent: "center",
    }}
  >
    <Table columns={columns} data={rows} key="name"></Table>
  </Container>
  )
}

function Home() {
  // let dataRows = [];

  // // Columns defines table headings and properties to be placed into the body
  let colData = [
    {
      heading: "Name",
      property: "name",
    },
    {
      heading: "Age",
      property: "age",
    },
    {
      heading: "Sex",
      property: "gender",
    },
    {
      heading: "DOB",
      property: "dob",
    },
  ];

  //Data is the array of objects to be placed into the table
  let rowData = [];

  function getUsers() {
    API.getRandomUser().then((res) => {
      BuildTable(res)
      // console.log(colData);
    });
  }
  console.log("rowData :", rowData);

  return (
    <>
      <Container style={{ border: "solid 1px black" }}>
        <div>
          <h1> Random Users</h1>
        </div>
      </Container>
      <Container
        style={{
          display: "inlineflex",
          border: "solid 1px purple",
          justifyContent: "center",
        }}
      >
        <div>
          <h2>
            Simply select the search button below to get a list of 200 users!
          </h2>
          <SearchBtn
            onClick={getUsers}
            flavor={"dark"}
            placeholder={"Get Users"}
          />
        </div>
      </Container>

      <Container
        style={{
          border: "solid 1px purple",
          justifyContent: "center",
        }}
      >
        <Table columns={colData} data={rowData} propertyAsKey="name"></Table>
      </Container>
    </>
  );
}

export default Home;
