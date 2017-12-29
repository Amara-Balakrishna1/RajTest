import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Forms from './index';
import EventForm from './event_expense';
import Layout from './layout';
import Table from './dayGrid';
import Tile from './tile';
import TourPlan from './TourPlan';
import UserDetail from './userDetail';
import './home.css';


// const cols = [
//   { key: 'firstName', label: 'First Name' },
//   { key: 'lastName', label: 'Last Name' },
//   { key: 'edit', label: '' }
// ];

// const data = [
//   { id: 1, firstName: 'John', lastName: 'Doe' },
//   { id: 2, firstName: 'Clark', lastName: 'Kent' }
// ];
export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <Route component={Layout} />
          <Switch>
            <Route exact path="/" component={Forms} />
            <Route exact path="/EventForm" component={EventForm} />
            <Route exact path="/TripInfo/:userId/:tripId" component={Table} />
            <Route exact path="/TourPlan" component={TourPlan} />
            <Route exact path="/Tile" component={Tile} />
            <Route exact path="/UserDetail" component={UserDetail} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
