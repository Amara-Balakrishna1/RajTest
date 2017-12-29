import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from './store/store';

// We'll create this in step 4.
import Routes from './components/routes';

// import EventForm from './components/event_expense';

// import TourPlan from './components/TourPlan';
// import UserDetail from './components/userDetail';
// const cols = [
//   { key: 'firstName', label: 'First Name' },
//   { key: 'lastName', label: 'Last Name' },
//   { key: 'edit', label: '' }
// ];

// const data = [
//   { id: 1, firstName: 'John', lastName: 'Doe' },
//   { id: 2, firstName: 'Clark', lastName: 'Kent' }
// ];

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Routes />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
