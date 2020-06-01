/**
 * Vikram Guhilot
 */


import React from "react"
import {Link} from "react-router-dom"
import '../App.css';


function Home(){
    return(
        <div className="container">
            <div className="row">
                
                <div className="col-sm-5 col-md-5 col-lg-5 box ">
                <Link to="/currency">
                        <h2>Currency Converter</h2>
                        <p>We give you the power of our most up to date, reputable currency information and offer you secure, reliable, easy to use products and services dedicated to making your life easier.</p>
                </Link>
                </div>
               
                
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                <Link to="/crypto">
                        <h2>Crypto Currency Price</h2>
                        <p>Bitcoin is the world's most widely used alternative currency with a total market cap of over $100 billion. The bitcoin network is made up of thousands of computers run by individuals all over the world.</p>
                </Link>
                </div>
                
            </div>

            <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <Link to="/metal">
                        <h2>Precious Metals Prices</h2>
                        <p>Precious metals prices can and do change throughout the day. Bid and ask prices shown here represent the last published prices per ounce your computer retrieved. We monitors marketplace activities and adjusts its Ask, Bid and Spot prices as much as 50 times or more throughout its 11-hour trading day.</p>
                    </Link>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <Link to="/country">
                    <h2>Country Information</h2>
                    <p>At a glance, you can see which are the richest and poorest nations; which have the most serious debt problem, the highest industrial growth rate and the healthiest export record; which spend the most per head on sectors as diverse as advertising and defence</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home