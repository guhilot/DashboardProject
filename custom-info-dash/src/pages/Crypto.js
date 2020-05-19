/**
 * Vikram Guhilot
 */

import React, {useContext} from "react"
import {Context} from "../Context"
import Search from "../components/Search"
import '../App.css';

function Crypto(){

    const {newCoinData, moreCoinData, extraData} = useContext(Context)
    //console
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-5 box"><Search /></div>
                <div className="col-lg-5 box">{newCoinData}</div>
            </div>
            <div className="row">
                <div className="col-lg-5 box">
                    <div className="row dd">
                        <div className="col-sm-1 ">ID</div>
                        <div className="col-sm-5 ">MaxSupply</div>
                        <div className="col-sm-4 ">Circulating</div>
                        <div className="col-sm-2 ">Rank</div>
                    </div>
                    {moreCoinData}
                </div>
                <div className="col-lg-5 box">
                    <div className="row dd">
                        <div className="col-sm-1 ">ID</div>
                        <div className="col-sm-7 ">Time Stamp</div>
                        <div className="col-sm-4 ">Capital</div>
                    </div>
                    {extraData}
                </div>
            </div>
        </div>
    )
}

export default Crypto