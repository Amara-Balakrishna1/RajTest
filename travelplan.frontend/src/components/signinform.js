import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import PropTypes from 'prop-types';
import { userLogin, detailInfo } from '../actions/formActions';
import './signin.css';


const serverURL = 'http://localhost:3000/';

class SimpleSignin extends Component {
  static get contextTypes() {
    return {
      router: PropTypes.object.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate(nextProps) {
    if (nextProps.isLogin) {
      this.context.router.history.push('/UserDetail');
    }
  }
  componentWillReciveProps(nextProps) {
    console.log('componentWillReciveProps', nextProps);
  }
  handleSubmit(argument) {
    const { firstName, password } = this.props.form.SimpleSignin.values;
    argument.nativeEvent.preventDefault();
    axios
      .post(`${serverURL}isUser`, {
        firstName,
        password
      })
      .then((response) => {
        const id = response.data;
        this.props.dispatch(userLogin(id !== false));
        axios.all([axios.get(`${serverURL}getUserInfo/userId/${id}`), axios.get(`${serverURL}getTripsInfo/userId/${id}`)])
          .then(axios.spread((userInfo, tripsInfo) => {
            const detail = {
              userInfo: userInfo.data,
              tripsInfo: tripsInfo.data
            };
            this.props.dispatch(detailInfo(detail));
          }));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log(this.props.isLogin);
    const {
      pristine,
      submitting
    } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className="signin">
        <div className={this.props.isLogin ? 'true' : 'false'}>
          <label>User Name</label>
          <div>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="User Name"
            />
          </div>
        </div>
        <div>
          <label>password</label>
          <div>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div className="adminCheck">
          <label>
            <Field
              name="Admin"
              component="input"
              type="checkbox"
            />
            Admin
          </label>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { userReducer, formReducer, form } = state;
  return {
    isLogin: userReducer.isLogin,
    formReducer,
    form
  };
};

export default reduxForm({
  form: 'SimpleSignin'
})(connect(mapStateToProps)(SimpleSignin));
