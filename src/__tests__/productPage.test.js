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

import { useProducts } from 'utils/hooks/useProducts';
import { useLatestAPI } from 'utils/hooks/useLatestAPI';

import ProductList from 'Pages/ProductList';

describe('<Product />', () => {
  test('Fetching and data', async () => {
    const { container } = render(
      <StoreProvider initialState={initialState} reducer={reducer}>
        <Router>
          <ProductList />
        </Router>
      </StoreProvider>,
    );
  });
  test('Pagination controls', async () => {
    // There are result, wait and rerender
    const { result, waitFor: waitForHook, rerender } = renderHook(() => useLatestAPI());
    console.log('result', result.current);
  });
});
