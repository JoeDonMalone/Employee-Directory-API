import React, {useState, useEffect} from "react";
import Button from "../FunctionalBtn";
import Moment from 'moment';
import "./style.css";

function Table({employees, OnSort}) {


  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Photo"} style = {{textAlign: 'center'}}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Name"}style = {{textAlign: 'center'}} onClick = {() => OnSort('Name')}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Phone"}style = {{textAlign: 'center'}} onClick = {() => OnSort('Phone')}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Email"}style = {{textAlign: 'center'}} onClick = {() => OnSort('Email')}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= { "DOB" }style = {{textAlign: 'center'}} onClick = {() => OnSort('DOB')}></Button></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees, index) => (
            <tr key={index}>
              <td>
                <img
                  alt="thumbnail"
                  className="img-fluid"
                  src={employees.picture.thumbnail}
                />
              </td>
              <td>{`${employees.name.first} ${employees.name.last}`}</td>
              <td>{employees.phone}</td>
              <td>{employees.email}</td>
              <td>{Moment(employees.dob.date).format("MM/DD/YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;