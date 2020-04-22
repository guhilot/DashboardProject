import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Currency from "./pages/Currency"
import Crypto from "./pages/Crypto"
import Metal from "./pages/Metal"
import Country from "./pages/Country"
import Home from "./pages/Home"


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


// .box {
//   position: relative;
//   display: inline-block;
//   width: 100px;
//   height: 100px;
//   border-radius: 5px;
//   background-color: #fff;
//   box-shadow: 0 1px 2px rgba(0,0,0,0.15);
//   transition: all 0.3s ease-in-out;
// }
// .box::after {
//   content: '';
//   position: absolute;
//   z-index: -1;
//   width: 100%;
//   height: 100%;
//   opacity: 0;
//   border-radius: 5px;
//   box-shadow: 0 5px 15px rgba(0,0,0,0.3);
//   transition: opacity 0.3s ease-in-out;
// }
// .box:hover {
//   transform: scale(1.2, 1.2);
// }

// /* Fade in the pseudo-element with the bigger shadow */
// .box:hover::after {
//   opacity: 1;
// }