/**
 * Vikram Guhilot
 */
import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Currency from "./pages/Currency"
import Crypto from "./pages/Crypto"
import Metal from "./pages/Metal"
import Country from "./pages/Country"
import Home from "./pages/Home"
//import Footer from "./components/Footer"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/currency"><Currency /></Route>
        <Route path="/crypto"><Crypto /></Route>
        <Route path="/metal"><Metal /></Route>
        <Route path="/country"><Country /></Route>
      </Switch>
      
    </div>
  );
}

export default App;


//<Footer/>