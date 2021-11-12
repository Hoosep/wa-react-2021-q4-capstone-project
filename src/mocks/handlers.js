/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import { API_BASE_URL } from 'utils/constants';

import productCategories from './en-us/product-categories.json';

const apiRef = 'asdasdasads';

export const handlers = [
  rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
    // console.log('Si se llamna:', req);
    return res(
      ctx.status(200),
      ctx.json({
        ref: apiRef,
        isLoading: false,
      })
      ,
    );
  }),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    console.log('Segundo se manda a llamar');
    return res(
      ctx.status(200),
      ctx.json(productCategories),
    );
  }),
];
