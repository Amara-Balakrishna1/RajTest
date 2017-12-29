import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'node-uuid';
import './tile.css';
import './dayGrid.css';

export default class Tile extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.tileClick = this.tileClick.bind(this);
  }
  onKeyPressHandler() {
    console.log('a');
  }
  tileClick() {
    const { info, userInfo } = this.props;
    this.context.router.history.push(`/TripInfo/${userInfo.id}/${info.tripid}`);
  }
  render() {
    const { info } = this.props;
    const {
      trip,
      amount,
      startDate,
      endDate
    } = info;
    return (
      <div key={uuid()} role="button" tabIndex={0} className="col-sm-2 col-xs-4 tile-wrapper" onKeyPress={this.onKeyPressHandler} onClick={() => { this.tileClick(); }}>
        <div key={uuid()} className="tile">
          <div key={uuid()} className="item active">
            <table key={uuid()} className="Grid-table">
              <thead key={uuid()} className="Grid-head">
                <tr key={uuid()}><th key={uuid()} className="tile-title">{trip}</th></tr>
              </thead>
              <tbody key={uuid()} className="Grid-body">
                <tr key={uuid()}><td key={uuid()} className="tile-title title pull-left">Budget</td></tr>
                <tr key={uuid()}><td key={uuid()}><span key={uuid()} className="pull-left title">Alloted -</span> <span key={uuid()} className="alloted title">{amount}</span></td></tr>
                <tr key={uuid()}><td key={uuid()}><span key={uuid()} className="pull-left title">Start Date -</span> <span key={uuid()} className="spent title">{new Date(startDate).toLocaleDateString()}</span></td></tr>
                <tr key={uuid()}><td key={uuid()}><span key={uuid()} className="pull-left title">End Date -</span> <span key={uuid()} className="save title">{new Date(endDate).toLocaleDateString()}</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
