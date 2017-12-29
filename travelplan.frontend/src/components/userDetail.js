import React, { Component } from 'react';
import UserInfo from './usersInfo';
import TripsInfo from './tripsInfo';
import './home.css';
import './UserDetail.css';

export default class UserDetail extends Component {
  render() {
    return (
      <div className="row app UserDetail-flex">
        <div className="row Title">
          <h1>UserDetail</h1>
        </div>
        <div className="row UserInfo UserDetail-flex">
          <div className="row subTitle">
            <h3>UserInfo</h3>
          </div>
          <UserInfo />
        </div>
        <div className="row TripsInfo UserDetail-flex">
          <div className="row subTitle">
            <h3>TripsInfo</h3>
          </div>
          <div className="row">
            <TripsInfo />
          </div>
        </div>
      </div>
    );
  }
}
