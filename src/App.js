import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Projects2 from "./components/Projects2";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollToTop";
import AutomaticScroll from "./components/AutomaticScroll";
import Mobile from "./components/Mobile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" id="colorlib-page">
        <AutomaticScroll />
        <Nav />
        <Mobile />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects2" exact component={Projects2} />
          <Route path="/projects2/:id" component={Project} />
        </Switch>
        <Footer />
        <ScrollUp scrollStepInPx="50" delayInMs="20" />
      </div>
    </Router>
  );
}

export default App;
