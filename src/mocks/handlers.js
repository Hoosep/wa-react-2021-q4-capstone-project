/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import { API_BASE_URL } from 'utils/constants';

import productCategories from './en-us/product-categories.json';
import featuredProducts from './en-us/featured-products.json';
import featuredBanners from './en-us/featured-banners.json';
import products from './en-us/products.json';

const apiRef = 'asdasdasads';

export const handlers = [
  rest.get(`${API_BASE_URL}`, (req, res, ctx) => {
    // console.log('Si se llamna:', req);
    return res(
      ctx.status(200),
      ctx.json({
        refs: [
          {
            ref: apiRef,
          },
        ],
      })
      ,
    );
  }),
  rest.get(`${API_BASE_URL}/documents/search`, (req, res, ctx) => {
    const query = req.url.searchParams;
    const ref = query.get('ref');
    const allQ = query.getAll('q');
    const lang = query.get('lang');
    const pageSize = query.get('pageSize');

    if (allQ.includes('[[at(document.type, "banner")]]')) {
      return res(
        ctx.status(200),
        ctx.json(featuredBanners),
      );
    }

    if (
      allQ.includes('[[at(document.type, "product")]]')
      && allQ.includes('[[at(document.tags, ["Featured"])]]')) {
      return res(
        ctx.status(200),
        ctx.json(featuredProducts),
      );
    }
    if (allQ.includes('[[at(document.type, "category")]]')) {
      return res(
        ctx.status(200),
        ctx.json(productCategories),
      );
    }

    console.log('hey!');
    if (allQ.includes('[[at(document.type, "product")]]')) {
      console.log('hi');
      return res(
        ctx.status(200),
        ctx.json(products),
      );
    }

    return res(
      ctx.status(200),
      ctx.json({}),
    );
  }),
];
