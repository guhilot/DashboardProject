import React from "react"
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <div className="flex-container">
        <ul className="nav">
          <Link to="/"><li>Home</li></Link>
          <Link to="/currency"><li className="money">Currency</li></Link>
          <Link to="/crypto"><li>Crypto Currency</li></Link>
          <Link to="/metal"><li>Precious Metals</li></Link>
          <Link to="/country"><li>Countries</li></Link>
        </ul>
      </div>
    )
}

export default Navbar