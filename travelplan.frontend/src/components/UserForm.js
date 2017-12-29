/* eslint-disable */
import React, { Component } from 'react';
import { Control } from 'react-redux-form';
import { reduxForm, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import addForm from '../actions/formActions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.addForm = this.addForm.bind(this);
  }
  addForm() {
    this.props.dispatch(addForm());
  }
  handleSubmit(user) {
    user.nativeEvent.preventDefault();
    console.log(user);
    // Do whatever you like in here.
    // If you connect the UserForm to the Redux store,
    // you can dispatch actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    const { handleSubmit, formsData } = this.props;
    const parentForm = (
      <div>
        <form
          model="formsData"
          onSubmit={this.handleSubmit}
        >
          {
            this.props.formsData.map((model, i) => (
              <div key={i}>
                <label htmlFor="model.firstName">First name:</label>
                <Control.text model={`${model}.firstName`} id={`${model}.firstName`} />

                <label htmlFor="model.lastName">Last name:</label>
                <Control.text model={`${model}.lastName`} id={`${model}.lastName`} />

                <button type="submit">
                  Finish registration!
                </button>
              </div>
            ))
          }
          <button onClick={this.addForm}>
            +Add Sub user
          </button>
        </form>
        
      </div>
    );
    return (
      <div>
        { parentForm }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    formsData: state.formsData.formsData
  };
}
export default reduxForm({
  form: 'formsData' // a unique name for this form
})(connect(mapStateToProps)(UserForm));
