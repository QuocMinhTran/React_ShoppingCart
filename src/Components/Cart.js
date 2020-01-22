import React, { Component } from "react";

class Cart extends Component {
  state = {};
  render() {
    let { children } = this.props;

    return (
      <section className="section">
        <div className="table-responsive">
          <table className="table product-table">
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>{children}</tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;
