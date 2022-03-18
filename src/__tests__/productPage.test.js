/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import {
  render, fireEvent, waitFor, screen,
} from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom';
// Store Provider
import { StoreProvider } from 'Store/store';
import { initialState, reducer } from 'Store/reducer';

import { useProducts } from 'utils/hooks/useProducts';

import ProductList from 'Pages/ProductList';
import Pagination from 'Common/Components/Pagination';

let dataProducts;

beforeEach(async () => {
  const { result, waitForNextUpdate } = renderHook(() => useProducts(5));

  await waitForNextUpdate();
  await waitForNextUpdate();

  dataProducts = result.current;
});
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
  test('Pagination Controls are generated correctly based on the number of results fetched from the API and the maximum number of products per page', async () => {
    const {
      data: {
        page: currentPage,
        total_pages: totalPages,
        total_results_size: totalProducts,
      },
    } = dataProducts;

    const data = render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalProducts}
      />,
    );
    const { container } = data;

    const pageClassNames = container.querySelectorAll('.page:not(.arrow)').length;

    expect(pageClassNames).toBe(6);
  });
  test('Prev button is disabled when the user is on the first page', async () => {
    const {
      data: {
        page: currentPage,
        total_pages: totalPages,
        total_results_size: totalProducts,
      },
    } = dataProducts;

    const { container } = render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalProducts}
      />,
    );
    const pageClassNames = container.querySelectorAll('.page');
    expect(pageClassNames[0].innerHTML).toBe('1');
  });
  test('Next button is disabled when the user is on the last page', async () => {
    const {
      data: {
        total_pages: totalPages,
        total_results_size: totalProducts,
      },
    } = dataProducts;

    const { container } = render(
      <Pagination
        currentPage={6}
        totalPages={totalPages}
        totalItems={totalProducts}
      />,
    );
    const pageClassNames = container.querySelectorAll('.page');
    const { length } = pageClassNames;
    expect(pageClassNames[length - 1].innerHTML).toBe('6');
  });
  test('Next button is working as expected', async () => {
    const {
      data: {
        total_pages: totalPages,
        total_results_size: totalProducts,
      },
    } = dataProducts;

    let currentPage = 1;
    const { container, debug, rerender } = render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalProducts}
        onChange={(page) => {
          currentPage = page;
        }}
      />,
    );
    const pageClassNames = container.querySelectorAll('.page');
    const { length } = pageClassNames;
    expect(pageClassNames[0].className).toMatch(/active/);

    // Get last element.
    const element = pageClassNames[length - 1];
    fireEvent.click(element);

    rerender(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalProducts}
        onChange={(page) => {
          currentPage = page;
        }}
      />,
    );
    const pageOne = screen.getByText(/1/);
    expect(pageOne.className).not.toMatch(/active/);

    const pageTwo = screen.getByText(/2/);
    expect(pageTwo.className).toMatch(/active/);
  });
  test('Prev button is working as expected', async () => {
    const {
      data: {
        total_pages: totalPages,
        total_results_size: totalProducts,
      },
    } = dataProducts;

    let currentPage = 5;
    const { container, debug, rerender } = render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalProducts}
        onChange={(page) => {
          currentPage = page;
        }}
      />,
    );
    const pageClassNames = container.querySelectorAll('.page');
    let pageFive = screen.getByText(/5/);
    expect(pageFive.className).toMatch(/active/);

    // Get last element.
    const element = pageClassNames[0];
    fireEvent.click(element);

    rerender(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalProducts}
        onChange={(page) => {
          currentPage = page;
        }}
      />,
    );

    pageFive = screen.getByText(/5/);
    expect(pageFive.className).not.toMatch(/active/);

    const pageFour = screen.getByText(/4/);
    expect(pageFour.className).toMatch(/active/);
  });
});
