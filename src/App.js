import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductsContainer from "./Containers/ProductsContainer";
import Message from "./Components/Message";
import CartContainer from "./Containers/CartContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Header */}
        <Header />
        <main id="mainContainer">
          <div className="container">
            {/*Products*/}
            <ProductsContainer />
            {/*Message*/}
            <Message />
            {/*Cart*/}
            <CartContainer />
          </div>
        </main>
        {/*Footer*/}
        <Footer />
      </div>
    );
  }
}

export default App;
