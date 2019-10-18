import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { within, fireEvent } from '@testing-library/react';

import NavBar from './NavBar';
import { renderWithRouter } from '../../test/render-utils';

describe('NavBar component', () => {
  test('it renders by default', () => {
    const { getByRole, history } = renderWithRouter(<NavBar />, { route: '/not-home' });

    const navbar = getByRole('navigation');
    expect(navbar).toHaveClass('navbar');

    const { getByAltText, getByText } = within(navbar);

    const logo = getByAltText(/bootcamp logo/i);
    expect(logo).toHaveAttribute('src', 'public/images/js-logo.png');

    const link = getByText(/bootcamp/i);
    expect(link).toHaveClass('navbar-brand');

    fireEvent.click(link);

    expect(history).toHaveProperty(
      'location',
      expect.objectContaining({
        hash: '',
        pathname: '/',
        search: '',
        state: undefined,
      })
    );
  });
});
