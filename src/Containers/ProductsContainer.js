import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "./../Components/Products";
import PropTypes from "prop-types";
import Product from "./../Components/Product";
import * as actions from "./../Actions/index";

class ProductsContainer extends Component {
  render() {
    const { products } = this.props;
    return <Products>{this.showProducts(products)}</Products>;
  }
  showProducts = products => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <Product
            key={index}
            product={product}
            onAddToCart={this.props.onAddToCart}
          />
        );
      });
    }
    return result;
  };
}
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  )
};
const mapStateToProps = state => {
  return { products: state.Products };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actions.addItemToCart(product, 1));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
