import React, { Component } from 'react';
import uuid from 'node-uuid';
import './dayGrid.css'

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.generateHeaders = this.generateHeaders.bind(this);
    this.generateRows = this.generateRows.bind(this);
  }
  generateHeaders() {
    const { cols } = this.props; // [{key, label}]
    // generate our header (th) cell components
    return cols.map((colData) => (
      <th key={colData.key}>
        {colData.label}
      </th>
    ));
  }
  generateRows() {
    const { data, cols } = this.props;
    return data.map((item) => {
      // handle the column data within each row
      const cells = cols.map((colData) => (
        <td key={uuid()}>
          { item[colData.key] ? item[colData.key] :
            (
              <div>
                <span>
                  <i className="fa fa-edit" />
                </span>
                <span>
                  <i className="fa fa-times" />
                </span>
              </div>
            )
          }
        </td>
      ));
      return (
        <tr key={item.id}>
          {cells}
        </tr>
      );
    });
  }
  render() {
    const headerComponents = this.generateHeaders();
    const rowComponents = this.generateRows();
    return (
      <table className="Grid-table">
        <thead className="Grid-head">
          <tr>
            {headerComponents}
          </tr>
        </thead>
        <tbody className="Grid-body">
          {rowComponents}
        </tbody>
      </table>
    );
  }
}
