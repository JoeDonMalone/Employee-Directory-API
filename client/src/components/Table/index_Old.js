import React, { Component } from "react";
import Moment from "react-moment";
import Button from "../FunctionalBtn";
import API from "../../utils/API";
import "./style.css";

class Table extends Component {
  buildTable = (columns, data, propertyAsKey) => {

  // handleClick(colHeading) {

  // }
    return (
      <>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={`header-${col.heading} col-md-2`}>
                <Button
                  flavor={"dark"}
                  colHeading={col.heading}
                  // onClick={API.handleSort(`${col.heading}`, data)}
                ></Button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`${item[propertyAsKey]}-${index}-row`}>
              {columns.map((col) => (
                <td key={`${item[propertyAsKey]}-${col.property}`}>
                  {item[col.property]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </>
    );
  };

  render() {
    const { columns, data, propertyAsKey } = this.props;

    return (
      <table className="table table-dark">
        {this.buildTable(columns, data, propertyAsKey)}
      </table>
    );
  }
}

export default Table;
