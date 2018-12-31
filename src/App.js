import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import WishPage from "./pages/WishPage";

import CartButton from "./components/CartButton";
import WishlistButton from "./components/WishlistButton";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </div>
            <div>
              <input type="search" placeholder="find here :)" />
            </div>
            <div className="link_to">
              <span>
                <CartButton />
              </span>
              <span>
                <WishlistButton />
              </span>
            </div>
          </header>
          <Switch>
            <Route path="/cart" component={CartPage} />
            <Route path="/wishlist" component={WishPage} />

            <Route path="/products/:id" component={ProductPage} />
            <Route path="/products" component={ProductsPage} />

            <Route path="/categories/:id" component={ProductsPage} />

            <Route path="/" component={ProductsPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
