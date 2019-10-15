/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { oneOf } from 'prop-types';
import classNames from 'classnames';

function Button({ variant, type, ...rest }) {
  return (
    <button
      type={type}
      className={classNames('btn', {
        [`btn-${variant}`]: variant,
      })}
      {...rest}
    />
  );
}

Button.propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
  variant: oneOf(['primary', 'secondary', 'link']),
};

Button.defaultProps = {
  type: 'button',
  variant: 'primary',
};

export default Button;
