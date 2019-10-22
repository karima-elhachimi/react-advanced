import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render as renderRtl, fireEvent } from '@testing-library/react';
import LoggedOnContext from './loggedOnContext';

describe('Context', () => {
  test('context is set', () => {
    const { getByTestId } = renderRtl(
      <LoggedOnContext.Provider value="setvalue">
        <LoggedOnContext.Consumer>
          {value => <span data-testid="my-consumer">Received: {value}</span>}
        </LoggedOnContext.Consumer>
      </LoggedOnContext.Provider>
    );

    const element = getByTestId('my-consumer');
    expect(element).toHaveTextContent(/Received: setvalue/);
  });
});
