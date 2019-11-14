import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Item from "./components/Item";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" id="colorlib-page">
        <Nav />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
