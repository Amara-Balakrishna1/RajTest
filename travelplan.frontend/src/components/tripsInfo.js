import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'node-uuid';
import Tile from './tile';

class TripsInfo extends Component {
  render() {
    const { tripsInfo, userInfo } = this.props;
    return (
      <div key={uuid()} className="row">
        {
          tripsInfo.map((item) => (
            <Tile key={uuid()} info={item} userInfo={userInfo} />
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { userReducer } = state;
  const { tripsInfo, userInfo } = userReducer;
  return {
    tripsInfo: (tripsInfo || []),
    userInfo: (userInfo || {})
  };
};

export default connect(mapStateToProps)(TripsInfo);
