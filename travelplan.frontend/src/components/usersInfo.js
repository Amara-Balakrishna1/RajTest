import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import './userInfo.css';

class UserInfo extends Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div key={uuid()} className="row">
        {
          Object.keys(userInfo).map((item) => (
            <div key={uuid()} className="col-sm-6">
              <div key={uuid()} className="half-width">
                {item}:
              </div>
              <div key={uuid()} className="half-width">
                {userInfo[item]}
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userReducer } = state;
  const { userInfo } = userReducer;
  return {
    userInfo: (userInfo || {})
  };
};

export default connect(mapStateToProps)(UserInfo);
