import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderRtl, fireEvent } from '@testing-library/react';

import UserForm from './UserForm';

describe('UserForm component', () => {
  function render(onSubmit = () => {}) {
    const result = renderRtl(<UserForm onSubmit={onSubmit} />);

    return {
      ...result,
      getFirstNameInput: result.getByLabelText.bind(null, /first name/i),
      getLastNameInput: result.getByLabelText.bind(null, /last name/i),
      getIsFamilyInput: result.getByLabelText.bind(null, /family/i),
      getSaveButton: result.getByText.bind(null, /save/i),
    };
  }

  test('it renders by default', () => {
    const { getFirstNameInput, getLastNameInput, getIsFamilyInput, getSaveButton } = render();

    const firstName = getFirstNameInput();
    expect(firstName).toBeEmpty();
    expect(firstName).toHaveProperty('placeholder', 'Enter First Name');

    const lastName = getLastNameInput();
    expect(lastName).toBeEmpty();
    expect(lastName).toHaveProperty('placeholder', 'Enter Last Name');

    const family = getIsFamilyInput();
    expect(family).toHaveProperty('checked', false);

    const saveButton = getSaveButton();
    expect(saveButton).toHaveClass('btn-primary');
  });

  describe('when the user clicks the save button', () => {
    test('it calls the onSubmit prop with the formValues', () => {
      const handleSubmit = jest.fn();
      const givenFirstName = 'Ludwig';
      const givenLastName = 'Von Beethoven';
      const givenIsFamily = true;

      const { getFirstNameInput, getLastNameInput, getIsFamilyInput, getSaveButton } = render(handleSubmit);

      const firstName = getFirstNameInput();
      const lastName = getLastNameInput();
      const family = getIsFamilyInput();
      const saveButton = getSaveButton();

      // fill in form
      fireEvent.change(firstName, { target: { value: givenFirstName } });
      fireEvent.change(lastName, { target: { value: givenLastName } });

      // ⚠️ Checkboxes need click to change which inverts current checked,
      // the target checked: false ensures we end up true
      fireEvent.click(family, { target: { checked: false } });

      fireEvent.click(saveButton);

      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: givenFirstName,
        lastName: givenLastName,
        isFamily: givenIsFamily,
      });
    });
  });
});
