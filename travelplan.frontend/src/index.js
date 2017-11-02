import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// We'll create this in step 3.
import store from './store/store';

// We'll create this in step 4.
import UserForm from './components/UserForm';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <UserForm />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app-root'));
