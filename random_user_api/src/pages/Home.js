import React, { useState, useEffect, Component } from "react";
import Container from "../components/Container";
// import Card from "../components/Card";
import SearchBtn from "../components/FunctionalBtn";
import API from "../utils/API";
import Table from "../components/Table";
import moment from 'moment'


class Home extends Component {
  state = {
    employees: [],
    headers: [
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
    ],
    rowData: [],
    generatedRowData: '',
    userGroupSeed: "",
    error: "",
  };

  buildEmployeeTable = (employees) => {
    let dataRows = [];
    employees.forEach(employee => {
     let dataRow = { 
      name:`${employee.name.first} ${employee.name.last}`,
      gender: employee.gender,
      dob : moment(employee.dob.date).format("MM/DD/YYYY"),
      age : employee.dob.age
    }
      dataRows.push(dataRow)
      this.setState({rowData: dataRows})
    });
    
    // this.state.setState({rowData: dataRows})
    console.log(this.state.employees)
    
  };

  handleButtonPress = async (event) => {
    event.preventDefault();
    API.getRandomUser()
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ employees: res.data.results, error: "" });
        this.buildEmployeeTable(this.state.employees);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <>
        <Container style={{ border: "solid 1px black" }}>
          <div>
            <h1> Random employees</h1>
          </div>
        </Container>
        <div>
          <Container
            style={{
              display: "inline-flex",
              alignemployees: "center",
              justifyContent: "space-between",
              // border: "solid 1px purple",
            }}
          >
            <h2>Hit the button to get a list of 200 employees!</h2>
            <SearchBtn onClick={this.handleButtonPress} flavor={"dark"}>
              Get employees
            </SearchBtn>
          </Container>
        </div>

        <Container
          style={{
            minHeight: "80%",
            border: "solid 10px blue",
            justifyContent: "center",
          }}
        >
          <Table
            columns={this.state.headers}
            data={this.state.rowData}
            propertyAsKey="name"
          />
        </Container>
      </>
    );
  }
}
export default Home;
