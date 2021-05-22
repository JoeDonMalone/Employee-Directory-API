import React, {useState, useEffect} from "react";
import Button from "../FunctionalBtn";
import Moment from 'moment';
import "./style.css";

function Table({props}) {
  const [employees, setEmployees] = useState([])

  

  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Photo"} style = {{textAlign: 'center'}} ></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Name"}style = {{textAlign: 'center'}} ></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Phone"}style = {{textAlign: 'center'}}></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= {"Email"}style = {{textAlign: 'center'}} ></Button></th>
            <th scope="col"><Button flavor = {'dark'} Heading= { "DOB" }style = {{textAlign: 'center'}}></Button></th>
          </tr>
        </thead>
        <tbody>
          {props.map((props, index) => (
            <tr key={index}>
              <td>
                <img
                  alt="thumbnail"
                  className="img-fluid"
                  src={props.picture.thumbnail}
                />
              </td>
              <td>{`${props.name.first} ${props.name.last}`}</td>
              <td>{props.phone}</td>
              <td>{props.email}</td>
              <td>{Moment(props.dob.date).format("MM/DD/YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;