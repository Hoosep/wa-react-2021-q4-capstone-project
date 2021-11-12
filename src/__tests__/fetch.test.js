/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import {
  render, fireEvent, waitFor, screen, getByText,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
// Store Provider
import { StoreProvider } from 'Store/store';
import { initialState, reducer } from 'Store/reducer';

// Use hook
import { useLatestAPI } from 'utils/hooks/useLatestAPI';
import { useCategories } from 'utils/hooks/useCategories';

import { server } from 'mocks/server';

import Home from 'Pages/Home';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe('<Home />', () => {
  test('loads and displays greeting', async () => {
    // const { result } = await renderHook(() => useCategories());
    // const { result } = renderHook(() => useLatestAPI());
    // console.log('r', result.current);

    const { container, debug } = await render(
      <StoreProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Home />
        </Router>
      </StoreProvider>,
    );

    // const carousel = await screen.getByText(container, 'Bed & Bath');

    // await waitFor(() => getByText(container, 'Categories'));
    // debug();
  });
});
