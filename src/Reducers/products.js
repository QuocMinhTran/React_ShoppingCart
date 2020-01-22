import * as types from "./../Constants/ActionTypes";

const initialState = [
  {
    id: 1,
    name: "Iphone 6 plus",
    price: 15,
    src:
      "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Powered by Brandon",
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "Iphone 7 plus",
    price: 20,
    src:
      "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Powered by Brandon 1",
    inventory: 15,
    rating: 5
  },
  {
    id: 3,
    name: "Iphone 8 plus",
    price: 25,
    src:
      "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "Powered by Brandon 2",
    inventory: 20,
    rating: 3
  }
];

const appReducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducers;
