import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './signup.css';

/* eslint-disable */
Date.prototype.fromDateInputValue =  (function(){
  const local = new Date(this);
  local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
});

Date.prototype.toDateInputValue = (function(){
  const local = new Date(this);
  local.setMinutes((this.getMinutes() + (24 * 10 * 60)) - this.getTimezoneOffset());
  return local.toJSON().slice(0, 10);
});

/* eslint-enable */

const renderBudgetField = ({ input }) => (
  <input min="1000" fields={input.name} defaultValue="5000" max="300000" step="100" type="number" />
);

const renderDateField = ({ input }) => {
  console.log(arguments);
  return (<input type="date" max="2079-12-31" defaultValue={input.name === 'startDate' ? new Date().fromDateInputValue() : new Date().toDateInputValue()} />);
};

const EventForm = props => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props;
  return (
    <form onSubmit={handleSubmit} className="signup">
      <div>
        <label>Event</label>
        <div>
          <Field
            name="Event"
            component="input"
            type="text"
            placeholder="Eg:Lunch"
          />
        </div>
      </div>
      <div>
        <label>Amount Spent</label>
        <div>
          <Field
            name="Amount"
            component={renderBudgetField}
          />
        </div>
      </div>
      <div>
        <label>Date</label>
        <div>
          <Field
            name="startDate"
            component={renderDateField}
          />
        </div>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field name="Category" component="select">
            <option />
            <option value="Clothes">Clothes</option>
            <option value="Eating">Eating</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Fuel">Fuel</option>
            <option value="General">General</option>
            <option value="Gifts">Gifts</option>
            <option value="Kids">Kids</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
          </Field>
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field name="Description" component="textarea" />
        </div>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Save
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'EventForm' // a unique identifier for this form
})(EventForm);
