import React from 'react';
import '@testing-library/jest-dom';
import { renderWithRouter as renderRtl } from '../../../test/render-utils';
import { fireEvent } from '@testing-library/dom';

import Navbar from './navbar.jsx';

describe('Navigation Module', () => {
  function renderComponent() {
    const result = renderRtl(<Navbar />, '/');

    return {
      ...result,
    };
  }

  test('it renders a navbar with role navigation', () => {
    const { getByRole } = renderComponent();

    const nav = getByRole('navigation');

    expect(nav).toBeInTheDocument();
  });

  test('verify brand logo image trough alt text', () => {
    const { getByAltText } = renderComponent();
    const brandLogo = getByAltText('Bootcamp Logo');

    expect(brandLogo).toBeInTheDocument();
  });

  test('verify brand text', () => {
    const { container } = renderComponent();
    const brandTextContainer = container.querySelector('a');
    expect(brandTextContainer).toHaveTextContent(/Bootcamp/);
  });

  test('correct link text bases on context', () => {
    const { container } = renderComponent();
    const link = container.querySelector('span');
    expect(link).toHaveTextContent(/log-in|log-out/);
  });

  test(' todo link is in navbar', () => {
    const { getByText, history } = renderComponent();
    const todoLink = getByText('todos');
    fireEvent.click(todoLink);
    expect(history.location.pathname).toBe('/todos');
  });
});
