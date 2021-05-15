import React from "react";
import Container from "../components/Container";
// import Card from "../components/Card";
import SearchBtn from "../components/FunctionalBtn";
import API from "../utils/API";
// import FunctionalBtn from '../components/FunctionalBtn'
// import Row from '../components/Row';
// import Col from '../components/Col';

function Home() {

  function getUsers() {
    API.getRandomUser().then((results) => console.log(results));
  }
  return (
    <>
      <Container style={{ border: "solid 1px black"}}>
        <div>
          <h1> Random Users</h1>
        </div>
      </Container>
      <Container
        style={{
            display: 'flex',
          border: "solid 1px purple",
          textAlign: "right",
          justifyContent: 'center' 
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
    </>
  );
}

export default Home;
