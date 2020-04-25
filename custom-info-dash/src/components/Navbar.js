/**
 * Vikram Guhilot
 */

import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="flex-container">
        <ul className="nav">
          <Link to="/"><li><i className="fa fa-2x fa-home"></i></li></Link>
          <Link to="/currency"><li className="money"><h3><b>$</b></h3></li></Link>
          <Link to="/crypto"><li><i className="fa fa-2x fa-bitcoin"></i></li></Link>
          <Link to="/metal"><li><h3><b>Au</b></h3></li></Link>
          <Link to="/country"><li><i className="fa fa-2x fa-globe"></i></li></Link>
        </ul>
      </div>
    )
}

export default Navbar