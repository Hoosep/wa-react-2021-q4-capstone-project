/* eslint-disable consistent-return */
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const ADD_TOTAL_TO_BAG = 'ADD_TOTAL_TO_BAG';
export const ADD_CART_TOTAL = 'ADD_CART_TOTAL';
export const REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART';
export const REMOVE_TOTAL_TO_BAG = 'REMOVE_TOTAL_TO_BAG';
export const REMOVE_CART_TOTAL = 'REMOVE_CART_TOTAL';
export const SHOW_MESSAGE_PRODUCT = 'SHOW_MESSAGE_PRODUCT';
export const CHANGE_QUANTITY_PRODUCT = 'CHANGE_QUANTITY_PRODUCT';
export const SUM_QUANTITY_BAG = 'SUM_QUANTITY_BAG';
export const GET_CART_TOTAL_BAG = 'GET_TOTAL_BAG';

export const initialState = {
  cart: [],
  totalBag: 0,
  cartTotal: 0,
  proceedCheckout: true,
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

export const removeProductToCart = (productID) => ({
  type: REMOVE_PRODUCT_TO_CART,
  productID,
});

export const removeTotalToBag = (total) => ({
  type: REMOVE_TOTAL_TO_BAG,
  total,
});

export const removeCartTotal = (total) => ({
  type: REMOVE_CART_TOTAL,
  total,
});

export const showMessageProduct = ({ message, productID }) => ({
  type: SHOW_MESSAGE_PRODUCT,
  message,
  productID,
});

export const changeQuantityProduct = ({ quantity, productID }) => ({
  type: CHANGE_QUANTITY_PRODUCT,
  quantity,
  productID,
});

export const sumQuantityBag = () => ({
  type: SUM_QUANTITY_BAG,
});

export const getCartTotalBag = () => ({
  type: GET_CART_TOTAL_BAG,
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
  if (action.type === REMOVE_PRODUCT_TO_CART) {
    const newProducts = state.cart.filter((item) => item.id !== action.productID);
    return {
      ...state,
      cart: newProducts,
    };
  }
  if (action.type === REMOVE_TOTAL_TO_BAG) {
    return {
      ...state,
      totalBag: state.totalBag - Number(action.total),
    };
  }
  if (action.type === REMOVE_CART_TOTAL) {
    return {
      ...state,
      cartTotal: state.cartTotal - Number(action.total),
    };
  }
  if (action.type === SHOW_MESSAGE_PRODUCT) {
    if (Array.isArray(state.cart) && state.cart.length > 0) {
      const repeatedIndex = state.cart.findIndex((item) => item.id === action.productID);

      if (repeatedIndex > -1) {
        const cart = [...state.cart];

        const itemExisting = { ...cart[repeatedIndex] };
        itemExisting.message = action.message;
        cart[repeatedIndex] = itemExisting;

        return {
          ...state,
          cart,
          proceedCheckout: false,
        };
      }
    }

    return {
      ...state,
    };
  }
  if (action.type === CHANGE_QUANTITY_PRODUCT) {
    if (Array.isArray(state.cart) && state.cart.length > 0) {
      const repeatedIndex = state.cart.findIndex((item) => item.id === action.productID);

      if (repeatedIndex > -1) {
        const cart = [...state.cart];

        const itemExisting = { ...cart[repeatedIndex] };
        itemExisting.total = Number(action.quantity);
        cart[repeatedIndex] = itemExisting;
        return {
          ...state,
          cart,
          proceedCheckout: true,
        };
      }
    }

    return {
      ...state,
    };
  }
  if (action.type === SUM_QUANTITY_BAG) {
    if (Array.isArray(state.cart) && state.cart.length > 0) {
      const totalBag = state.cart
        .map((item) => item.total)
        .reduce((prev, curr) => prev + curr, 0);
      return {
        ...state,
        totalBag,
      };
    }
  }
  if (action.type === GET_CART_TOTAL_BAG) {
    if (Array.isArray(state.cart) && state.cart.length > 0) {
      const cartTotal = state.cart
        .map((item) => item.total * item.price)
        .reduce((prev, curr) => prev + curr, 0);
      return {
        ...state,
        cartTotal,
      };
    }
  }
};
