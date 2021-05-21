import React from "react";
import Button from "../FunctionalBtn";
import Moment from 'moment';
import "./style.css";

function Table({props}) {
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Photo"}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Name"}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Phone"}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Email"}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= { "DOB" }></Button></th>
          </tr>
        </thead>
        <tbody>
          {props.map((result, index) => (
            <tr key={index}>
              <td>
                <img
                  alt="thumbnail"
                  className="img-fluid"
                  src={result.picture.thumbnail}
                />
              </td>
              <td>{`${result.name.first}`}</td>
              <td>{result.phone}</td>
              <td>{result.email}</td>
              <td>{Moment(result.dob.date).format("MM/DD/YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;