import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { within, fireEvent } from '@testing-library/react';

import NavBar from './NavBar';
import { renderWithRouter } from '../../test/render-utils';
import IdentityContext from '../contexts/IdentityContext';

describe('NavBar component', () => {
  function render(route, currentUser) {
    const value = {
      current: currentUser,
    };

    value.setCurrent = user => {
      value.current = user;
    };

    const result = renderWithRouter(
      <IdentityContext.Provider value={value}>
        <NavBar />
      </IdentityContext.Provider>,
      { route }
    );

    return {
      ...result,
      getComponent: result.getByRole.bind(null, 'navigation'),
    };
  }

  function toBeALocation({ hash = '', pathname = '/', search = '', state = undefined } = {}) {
    return expect.objectContaining({
      hash,
      pathname,
      search,
      state,
    });
  }

  test('it renders the nav with a clickable brand logo', () => {
    const { getComponent, history } = render('/not-home');

    const navbar = getComponent();
    expect(navbar).toHaveClass('navbar');

    const { getByAltText, getByText } = within(navbar);

    const logo = getByAltText(/bootcamp logo/i);
    expect(logo).toHaveAttribute('src', expect.stringMatching(/public(\/|\/\/)images(\/|\/\/)js-logo.png/));

    const link = getByText(/bootcamp/i);
    expect(link).toHaveClass('navbar-brand');

    fireEvent.click(link);

    expect(history).toHaveProperty('location', toBeALocation());
  });

  test('it renders a login link when the user is anonymous', () => {
    const { getComponent, history, queryByText } = render('/not-home');

    const { getByText } = within(getComponent());

    const loginLink = getByText(/log in/i);
    expect(queryByText(/log out/i)).not.toBeInTheDocument();

    fireEvent.click(loginLink);

    expect(history).toHaveProperty('location', toBeALocation({ pathname: '/login' }));
  });

  test('it renders a logout link when the user is authenticated', () => {
    const { getComponent, history, queryByText } = render('/not-home', 'johnDoe');

    const { getByText } = within(getComponent());

    const loginLink = getByText(/log out/i);
    expect(queryByText(/log in/i)).not.toBeInTheDocument();

    fireEvent.click(loginLink);

    expect(history).toHaveProperty('location', toBeALocation({ pathname: '/logout' }));
  });
});
