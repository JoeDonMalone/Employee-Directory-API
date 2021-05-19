// import React, { useState, useEffect, Component } from "react";
// import Container from "../components/Container";
// // import Card from "../components/Card";
// import SearchBtn from "../components/FunctionalBtn";
// import API from "../utils/API";
// import Table from "../components/Table";
// import Card from '../components/Card'

// class Home extends Component {
//   state = {
//     users: [],
//     cards: [],
//     headers: [
//       {
//         heading: "Name",
//         property: "name",
//       },
//       {
//         heading: "Age",
//         property: "age",
//       },
//       {
//         heading: "Sex",
//         property: "gender",
//       },
//       {
//         heading: "DOB",
//         property: "dob",
//       },
//     ],
//     rowData: [],
//     userGroupSeed: "",
//     error: "",
//   };

//   // buildUserTable = async (users) => {
//   //   let dataRows = [];
//   //   let singleDataRow = {};
//   //  await users.forEach((item) => {
//   //     singleDataRow.name = `${item.name.first} ${item.name.last}`;
//   //     singleDataRow.gender = item.gender;
//   //     singleDataRow.dob = item.dob.date;
//   //     singleDataRow.age = item.dob.age;
//   //     dataRows.push(singleDataRow);
//   //     console.log(singleDataRow);
//   //   })
//   //    this.setState({ rowData: dataRows });
//   // };

//   handleButtonPress = async (event) => {
//     event.preventDefault();
//     API.getRandomUser()
//       .then(async (res) => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ cards: res.data, error: "" });
//         console.log(this.state.cards)
//         // this.buildUserTable(res.data.results);
//         })
//       .catch((err) => this.setState({ error: err.message }));
//   };

//   render() {
//     return (
//       <>
//         <Container style={{ border: "solid 1px black" }}>
//           <div>
//             <h1> Random Users</h1>
//           </div>
//         </Container>
//         <div>
//           <Container
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               justifyContent: "space-between",
//               // border: "solid 1px purple",
//             }}
//           >
//             <h2>Hit the button to get a list of 200 users!</h2>
//             <SearchBtn onClick={this.handleButtonPress} flavor={"dark"}>
//               Get Users
//             </SearchBtn>
//           </Container>
//         </div>

//         <Container
//           style={{
//             minHeight: "80%",
//             border: "solid 10px blue",
//             justifyContent: "center",
//           }}
//         >
//           <Card props = {this.state.cards}></Card>
//           {/* <Table
//             columns={this.state.headers}
//             data={this.state.rowData}
//             propertyAsKey="name"
//           /> */}
//         </Container>
//       </>
//     );
//   }
// }
// export default Home;
