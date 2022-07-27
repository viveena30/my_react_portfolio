import "./App.css";

import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About/About";

const App = () => {
  return (
    <>
      <Router>
        {/* <Route path="/components/pages/About/About.js" component={About} /> */}
        <Sidebar />
        <Container />
        
      </Router>
    </> 
  );
};

export default App;
