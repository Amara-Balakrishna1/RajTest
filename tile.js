import React, { Component } from 'react';
import './tile.css';
import './dayGrid.css';

export default class Tile extends Component {
  render() {
    return (
      <div className="col-sm-2 col-xs-4 tile-wrapper">
        <div id="tile1" className="tile">
          <div className="item active">
            <table className="Grid-table">
              <thead className="Grid-head">
                <tr><th className="tile-title">Day 1</th></tr>
              </thead>
              <tbody className="Grid-body">
                <tr><td className="tile-title title pull-left">Budget</td></tr>
                <tr><td><span className="pull-left title">Alloted -</span> <span className="alloted title">$1000</span></td></tr>
                <tr><td><span className="pull-left title">Spent -</span> <span className="spent title">$800</span></td></tr>
                <tr><td><span className="pull-left title">Saved -</span> <span className="save title">$200</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
