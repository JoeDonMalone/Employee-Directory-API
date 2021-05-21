import React, { useState, useEffect, Component } from "react";
import Container from "../components/Container";
import API from "../utils/API";
import Table from "../components/Table";
import Image from "../components/Images";
import moment from "moment";

class Home extends Component {
  state = {
    employees: [],
    headers: [
      {
        heading: "Photo",
        property: "photo",
      },
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
    sortedRowData: [],
    userGroupSeed: "",
    error: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ employees: res.data.results, error: "" });
        this.buildEmployeeTable(this.state.employees);
      })
      .catch((err) => this.setState({ error: err.message }));
  }

  buildEmployeeTable = (employees) => {
    let dataRows = [];
    employees.forEach((employee) => {
      let dataRow = {
        name: `${employee.name.first} ${employee.name.last}`,
        gender: employee.gender,
        dob: moment(employee.dob.date).format("MM/DD/YYYY"),
        age: employee.dob.age,
        photo: <Image picture={employee.picture.thumbnail}></Image>,
      };
      dataRows.push(dataRow);
      this.setState({ rowData: dataRows });
    });

    this.state.setState({rowData: dataRows})
    console.log(this.state.employees);
  };

  sortEmployeesByName() {
    let sortedEmployees  = this.state.rowData;
    // this.state.setState({sortedRowData: sortedEmployees})
  }

  render() {
    return (
      <>
        <Container style={{ border: "solid 1px black" }}>
          <div>
            <h1> Current Employees</h1>
          </div>
        </Container>

        <Container
          className={"container"}
          style={{
            display: "flex",
            // minHeight: "80%",
            alignContent: "center",
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
