import React, { useState } from 'react';
import { func } from 'prop-types';

import Button from '../../../components/Button';

function UserForm({ onSubmit }) {
  const [formValues, setFormValues] = useState({});

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setFormValues(values => ({ ...values, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="firstName">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            placeholder="Enter First Name"
            type="text"
            value={formValues.firstName || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="lastName">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="lastName"
            placeholder="Enter Last Name"
            name="lastName"
            type="text"
            value={formValues.lastName || ''}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 form-check-label" htmlFor="isFamily">
          Family
        </label>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              id="isFamily"
              name="isFamily"
              type="checkbox"
              checked={formValues.isFamily || false}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

UserForm.propTypes = {
  onSubmit: func.isRequired,
};

export default UserForm;
