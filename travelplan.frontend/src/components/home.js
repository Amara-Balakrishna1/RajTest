import React, { Component } from 'react';
import SimpleForm from './signupform';
import SimpleSignin from './signinform';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home-banner">
          <div className="row full-width">
            <div className="col-md-6 col-sm-12">
              <h1>Welcome, Smart Travelplanner</h1>
            </div>
            <div className="col-md-6 col-sm-12">
              <SimpleSignin />
            </div>
          </div>
        </div>
        <div className="signup">
          <div className="row full-width">
            <div className="col-md-6 col-sm-12 full-height features">
              <div className="title">
                <h1>Features</h1>
              </div>
              <div className="content">
                <ul>
                  <li>
                    User is be able to create trips in the dashboard where they select the number of days the trip will go fore and the total trip budget.
                  </li>
                  <li>
                    When the user creates the trip the total budget should distribute the budget equally for each day so they know how much they are able to spend each day.
                  </li>
                  <li>
                    The user can store each expense in the system and That will deduct from the daily budget.
                  </li>
                  <li>
                    There is a main dashboard that will show how much they have left to spend for the current day and how much they have left in their trip budget.
                  </li>
                  <li>
                    If the user spends over there allotted budget it will take that and minus it from the daily budget for the rest of the trip equally.
                  </li>
                  <li>
                    The system can be set up as a SAAS where there will be a trial period and then a monthly fee.
                  </li>
                  <li>
                    There is an admin panel where i can review the users details and information about there trips to provide support.
                  </li>
                  <li>
                    The user is able to create multiple trips and swap between them.
                  </li>
                  <li>
                    The app is responsive can be used in any widget and any browser
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 full-height">
              <SimpleForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
