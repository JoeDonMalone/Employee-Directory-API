import React, {Component } from "react";
import Moment from 'react-moment';

class Table extends Component {
  buildTable = (columns, data, propertyAsKey) => {
    return (
      <>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={`header-${col.heading}`}>{col.heading}</th>
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
      <table className="table">
        {this.buildTable(columns, data, propertyAsKey)}
      </table>
    );
  }
}

export default Table;
