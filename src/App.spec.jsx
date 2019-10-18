import React from 'react';
import { renderWithRouter } from '../test/render-utils';
import '@testing-library/jest-dom/extend-expect';

import { App } from './App';

jest.mock('./modules/home/Home', () => () => <div data-testid="home-module" />);
jest.mock('./modules/login/Login', () => () => <div data-testid="login-module" />);
jest.mock('./pages/NotFound', () => () => <div data-testid="page-not-found" />);
jest.mock('./components/NavBar', () => () => <div data-testid="navbar-mock" />);

describe('App', () => {
  function render(route) {
    const renderResult = renderWithRouter(<App />, { route });

    const guardAgainstRenderingPageNotFound = () =>
      expect(renderResult.queryByTestId('page-not-found')).not.toBeInTheDocument();

    return {
      ...renderResult,
      guardAgainstRenderingPageNotFound,
    };
  }

  test('it renders by default', () => {
    const { getByTestId } = render();

    getByTestId('navbar-mock');
  });

  describe('routing', () => {
    test('it renders Home by default (/)', () => {
      const { getByTestId, guardAgainstRenderingPageNotFound } = render();

      getByTestId('home-module');

      guardAgainstRenderingPageNotFound();
    });

    test('it renders the login module on /login ', () => {
      const { getByTestId, guardAgainstRenderingPageNotFound } = render('/login');

      getByTestId('login-module');

      guardAgainstRenderingPageNotFound();
    });

    test('it renders the not found page for an unknown url', () => {
      const { getByTestId, queryByTestId } = render('/unknown');

      getByTestId('page-not-found');

      expect(queryByTestId('home-module')).not.toBeInTheDocument();
    });
  });
});
