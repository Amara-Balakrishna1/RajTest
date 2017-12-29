import React, { Component } from 'react';
import uuid from 'node-uuid';
import { connect } from 'react-redux';
import { tripInfo } from '../actions/formActions';
import './dayGrid.css';

class Table extends Component {
  constructor(props) {
    super(props);
    this.generateHeaders = this.generateHeaders.bind(this);
    this.generateRows = this.generateRows.bind(this);
  }
  componentWillMount() {
    const { userId, tripId } = this.props.match.params;
    this.props.dispatch(tripInfo(userId, tripId));
  }
  generateHeaders() {
    const cols = [...Object.keys(this.props.tripInfo[0] || {}).map(item => ({ Key: item, label: item })), { key: 'edit', label: '' }]; // [{key, label}]
    // generate our header (th) cell components
    return cols.map((colData) => (
      <th key={uuid()}>
        {colData.label}
      </th>
    ));
  }
  generateRows() {
    const cols = [...Object.keys(this.props.tripInfo[0] || {}).map(item => ({ Key: item, label: item })), { key: 'edit', label: '' }]; // [{key, label}]
    const data = this.props.tripInfo;
    return data.map((item) => {
      // handle the column data within each row
      const cells = cols.map((colData) => (
        <td key={uuid()}>
          { item[colData.Key] ? item[colData.Key] :
            (
              <div key={uuid()}>
                <span key={uuid()}>
                  <i key={uuid()} className="fa fa-edit" />
                </span>
                <span key={uuid()}>
                  <i key={uuid()} className="fa fa-times" />
                </span>
              </div>
            )
          }
        </td>
      ));
      return (
        <tr key={uuid()}>
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

function mapStateToProps(state) {
  return {
    tripInfo: state.userReducer.tripInfo || []
  };
}
export default connect(mapStateToProps)(Table);
