import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Login from "./components/Login";
import Footer from "./components/Footer";
// import SearchResults from "./components/SearchResults";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
//commerceJS
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [cart, setCart] = useState({});
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list();
    const productsPerCat = categoriesData.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          productsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          ),
        },
      ];
    }, []);
    setCategories(productsPerCat);
    console.log(productsPerCat);
  };

  const fetchCart = async () => {
    const data = await commerce.cart.retrieve();
    setCart(data);
    console.log(data);
  };

  const handleAddToCart = async (product_id, quantity) => {
    console.log(product_id);
    const item = await commerce.cart.add(product_id, quantity);
    setCart(item.cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const data = await commerce.cart.update(productId, { quantity });
    setCart(data.cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const data = await commerce.cart.remove(productId);
    setCart(data.cart);
  };
  const handleEmptyCart = async () => {
    const data = await commerce.cart.empty();
    setCart(data.cart);
  };
  useEffect(() => {
    fetchCart();
    fetchCategories();
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navbar totalItems={cart.total_items} />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/profiles/:username">
              <Profile />
            </Route>
            <Route exact path="/products">
              <Products categories={categories} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
              />
            </Route>
            {/* <Route exact path="/profiles/:state">
              <SearchResults />
            </Route> */}
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
