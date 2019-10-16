import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderRtl, within, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  function render({ variant, type, disabled, className, onClick, size, renderFn = renderRtl } = {}) {
    const testId = 'my-button-test-id';

    const renderResult = renderFn(
      <Button
        data-testid={testId}
        variant={variant}
        type={type}
        disabled={disabled}
        className={className}
        onClick={onClick}
        size={size}
      >
        <div data-testid="child" />
      </Button>
    );

    return {
      ...renderResult,
      component: () => renderResult.getByTestId(testId),
    };
  }

  test('it renders by default as a button', () => {
    const { component } = render();

    const button = component();
    expect(button).toHaveProperty('tagName', expect.stringMatching(/button/i));

    expect(button).toHaveClass('btn', 'btn-primary');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).not.toHaveClass('btn-sm');
  });

  test('it renders with a class according to variant', () => {
    const { component } = render({ variant: 'secondary' });

    const button = component();

    expect(button).toHaveClass('btn', 'btn-secondary');
  });

  test('it renders with a class according to size', () => {
    const { component, rerender } = render({ size: 'small' });

    const button = component();

    expect(button).toHaveClass('btn', 'btn-sm');

    render({ size: 'large', renderFn: rerender });
    expect(button).toHaveClass('btn', 'btn-lg');
  });

  test('ensure it renders as the specified button type', () => {
    const { component } = render({ type: 'submit' });

    const button = component();
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('ensure it can handle extra classes trough className', () => {
    const { component } = render({ className: 'custom-class' });

    const button = component();
    expect(button).toHaveClass('btn', 'btn-primary', 'custom-class');
  });

  test('ensure it renders its children', () => {
    const { component } = render();

    const button = component();

    within(button).getByTestId('child');
  });

  test('ensure it passes disabled', () => {
    const { component } = render({ disabled: true });

    const button = component();
    expect(button).toHaveProperty('disabled', true);
  });

  test('ensure it passes onClick', () => {
    const handleClick = jest.fn();

    const { component } = render({ onClick: handleClick });

    const button = component();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
