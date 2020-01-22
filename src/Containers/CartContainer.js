import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./../Components/Cart";
import PropTypes from "prop-types";
import * as Message from "./../Constants/Messages";
import CartItem from "./../Components/CartItem";
import CartResult from "../Components/CartResult";

class CartContainer extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = cart => {
    let result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item} index={index} />;
      });
    }
    return result;
  };
  showTotalAmount = cart => {
    let result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  )
};
const mapStateToProps = state => {
  return { cart: state.Cart };
};
export default connect(mapStateToProps, null)(CartContainer);
