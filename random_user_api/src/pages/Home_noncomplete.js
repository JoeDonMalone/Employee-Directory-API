// import React, { useState, setState, useEffect, Component } from "react";
// import Container from "../components/Container";
// import API from "../utils/API";
// import Table from "../components/Table";
// import Image from "../components/Images";
// import moment from "moment";

// function Home(props) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const [headers, setHeaders] = useState([
//     {
//       heading: "Photo",
//       property: "photo",
//     },
//     {
//       heading: "Name",
//       property: "name",
//     },
//     {
//       heading: "Age",
//       property: "age",
//     },
//     {
//       heading: "Sex",
//       property: "gender",
//     },
//     {
//       heading: "DOB",
//       property: "dob",
//     },
//   ]);
//   const [rowData, setRowData] = useState([]);
//   const [sortedRowData, setSortedRowData] = useState([]);
//   const [resultSeed, setResultSeed] = useState("");

//   // const getEmployees = async () => {
//   //   setIsLoading(true);
//   //   setError(null);


//   //   try {
//   //     await API.getEmployees().then((res) => {
//   //       setEmployees(res.data.results);
//   //       setIsLoading(false);
              
//   //     });
//   //   } catch (e) {
//   //     setError(e);
//   //     setIsLoading(false);
//   //   }
//   // };
//   // useEffect(() => {
//   //   getEmployees();
//   //   buildEmployeeTable(employees);  
//   // },[]);

//   useEffect( () => {
//     API.getEmployees().then((res) => {
//       console.log(res)
//       setEmployees(res.data.results);
//       return() => {
//       buildEmployeeTable(employees)}; 
//     })
//   },[]);
  

//   const buildEmployeeTable = (employees) => {
//     let dataRows = [];
//     employees.forEach((employee) => {
//       let dataRow = {
//         name: `${employee.name.first} ${employee.name.last}`,
//         gender: employee.gender,
//         dob: moment(employee.dob.date).format("MM/DD/YYYY"),
//         age: employee.dob.age,
//         photo: <Image picture={employee.picture.thumbnail}></Image>,
//       };
//       dataRows.push(dataRow);
//     });

//     setRowData(dataRows);
//   };

//   // const sortEmployeesByName = (e) => {
//   //   let sortedEmployees  = state.rowData;
//   //   // state.setState({sortedRowData: sortedEmployees})
//   // }

//   return (
//     <>
//       <Container style={{ border: "solid 1px black" }}>
//         <div>
//           <h1> Current Employees</h1>
//         </div>
//       </Container>

//       <Container
//         className={"container"}
//         style={{
//           display: "flex",
//           // minHeight: "80%",
//           alignContent: "center",
//         }}
//       >
//         <Table columns={headers} data={rowData} propertyAsKey="name" />
//       </Container>
//     </>
//   );
// }
// export default Home;
