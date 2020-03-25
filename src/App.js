import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import Home from "./container/Home/Home";
import Contact from "./container/ContactUs/Contact";
import Post from "./container/Post/Post";
import Posts from "./container/Post/Posts";
import About from "./container/About/About";

import Header from "./components/Header/Header";
import HeaderBox from "./components/HeaderBox/HeaderBox";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeaderBox />

        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/post/:postId" component={Post} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
