import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./container/Home/Home";
import Contact from "./container/ContactUs/Contact";
import Post from "./container/Post/Post";
import About from "./container/About/About";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
