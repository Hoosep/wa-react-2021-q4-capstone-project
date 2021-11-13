/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';

import { BrowserRouter as Router } from 'react-router-dom';

import {
  render, fireEvent, waitFor, screen, getByText,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
// Store Provider
import { StoreProvider } from 'Store/store';
import { initialState, reducer } from 'Store/reducer';

import Home from 'Pages/Home';

describe('<Home />', () => {
  test('Fetching and data', async () => {
    const { container } = render(
      <StoreProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Home />
        </Router>
      </StoreProvider>,
    );

    await waitFor(() => {
      // Featured banner
      expect(getByText(container, 'AMAZING FINISHES - BEDROOM')).toBeInTheDocument();

      // Categories
      expect(getByText(container, 'Bed & Bath')).toBeInTheDocument();

      // Products
      expect(getByText(container, 'Grayton Armchair')).toBeInTheDocument();
    });
  });
});
