/* eslint-disable consistent-return */
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADD_TOTAL_TO_BAG = 'ADD_TOTAL_TO_BAG';
export const ADD_CART_TOTAL = 'ADD_CART_TOTAL';

export const initialState = {
  cart: [],
  totalBag: 0,
  cartTotal: 0,
};

export const addProductToCart = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
});

export const addTotalToBag = (total) => ({
  type: ADD_TOTAL_TO_BAG,
  total,
});
export const addCartTotal = (total) => ({
  type: ADD_CART_TOTAL,
  total,
});

export const reducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT_TO_CART) {
    if (Array.isArray(state.cart) && state.cart.length > 0) {
      const repeatedIndex = state.cart.findIndex((item) => item.id === action.product.id);

      if (repeatedIndex > -1) {
        const cart = [...state.cart];

        const itemExisting = { ...cart[repeatedIndex] };
        itemExisting.total = Number(itemExisting.total) + Number(action.product.total);
        cart[repeatedIndex] = itemExisting;

        return {
          ...state,
          cart,
        };
      }
    }

    return {
      ...state,
      cart: state.cart.concat(action.product),
    };
  }
  if (action.type === ADD_TOTAL_TO_BAG) {
    return {
      ...state,
      totalBag: state.totalBag + Number(action.total),
    };
  }
  if (action.type === ADD_CART_TOTAL) {
    return {
      ...state,
      cartTotal: state.cartTotal + Number(action.total),
    };
  }
};
