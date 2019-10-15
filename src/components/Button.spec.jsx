import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderRtl, within } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  const BUTTON_TEST_ID = 'my-button';

  function render({ variant, type, disabled } = {}) {
    return renderRtl(
      <Button data-testid={BUTTON_TEST_ID} variant={variant} type={type} disabled={disabled}>
        <div data-testid="child" />
      </Button>
    );
  }

  test('it renders by default', () => {
    const { getByTestId } = render();

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveProperty('tagName', expect.stringMatching(/button/i));

    expect(button).toHaveClass('btn', 'btn-primary');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('it renders with a class according to variant', () => {
    const { getByTestId } = render({ variant: 'secondary' });

    const button = getByTestId(BUTTON_TEST_ID);

    expect(button).toHaveClass('btn', 'btn-secondary');
  });

  test('it renders as the specified type', () => {
    const { getByTestId } = render({ type: 'submit' });

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('it renders the children', () => {
    const { getByTestId } = render();

    const button = getByTestId(BUTTON_TEST_ID);

    within(button).getByTestId('child');
  });

  test('it can be disabled', () => {
    const { getByTestId } = render({ disabled: true });

    const button = getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveProperty('disabled', true);
  });
});
