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
  <input min="1000" defaultValue="5000" max="300000" step="100" type={input.type} />
);

const renderDateField = ({ input }) => {
  console.log(arguments);
  return <input type="date" max="2079-12-31" defaultValue={input.name === 'startDate' ? new Date().fromDateInputValue() : new Date().toDateInputValue()} />;
};

const TourPlan = props => {
  const {
    handleSubmit,
    pristine,
    submitting
  } = props;
  return (
    <form onSubmit={handleSubmit} className="signup">
      <div>
        <label>Location</label>
        <div>
          <Field
            name="Location"
            component="input"
            type="text"
            placeholder="Eg:Agra"
          />
        </div>
      </div>
      <div>
        <label>Budget</label>
        <div>
          <Field
            name="Budget"
            component={renderBudgetField}
          />
        </div>
      </div>
      <div>
        <label>Start Date</label>
        <div>
          <Field
            name="startDate"
            component={renderDateField}
          />
        </div>
      </div>
      <div>
        <label>End Date</label>
        <div>
          <Field name="endDate" component={renderDateField} />
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
  form: 'TourPlan' // a unique identifier for this form
})(TourPlan);
