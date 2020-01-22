import * as types from "./../Constants/ActionTypes";
const data = JSON.parse(localStorage.getItem("cart"));
const initialState = data ? data : [];
const findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    console.log(product);
    if (product.product.id === id) {
      result = index;
    }
  });
  return result;
};
const appReducers = (state = initialState, action) => {
  let index = -1;
  switch (action.type) {
    case types.ADD_TO_CART:
      index = findIndex(state, action.product.id);

      if (index === -1) {
        const newItem = {
          product: action.product,
          quantity: action.quantity
        };
        state.push(newItem);
      } else {
        state[index].quantity += action.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
export default appReducers;
