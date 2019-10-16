/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { oneOf, string } from 'prop-types';
import classNames from 'classnames';

const SIZE_MAP = {
  small: 'sm',
  large: 'lg',
};

function Button({ className, variant, size, type, ...rest }) {
  const mappedSize = SIZE_MAP[size];

  return (
    <button
      {...rest}
      type={type}
      className={classNames('btn', className, {
        [`btn-${variant}`]: variant,
        [`btn-${mappedSize}`]: mappedSize,
      })}
    />
  );
}

Button.propTypes = {
  className: string,
  size: oneOf(['small', 'large']),
  type: oneOf(['button', 'submit', 'reset']),
  variant: oneOf(['primary', 'secondary', 'link']),
};

Button.defaultProps = {
  className: undefined,
  size: undefined,
  type: 'button',
  variant: 'primary',
};

export default Button;
