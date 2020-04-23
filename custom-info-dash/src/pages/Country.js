import React, {useContext} from "react"
import {Context} from "../Context"
import ContSearch from "../components/ContSearch"
import '../App.css';

function Country(){

    const {countryInfo} = useContext(Context)

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-5 box"><ContSearch /></div>
                <div className="col-lg-5 box">
                    <div className="row dd">
                        <div className="col-sm-3 col-md-3 col-lg-3">Region</div>
                        <div className="col-sm-3 col-md-3 col-lg-3">Country</div>
                        <div className="col-sm-3 col-md-3 col-lg-3">Longitude</div>
                        <div className="col-sm-3 col-md-3 col-lg-3">Latitude</div>
                    </div>
                    {countryInfo}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-5 box">3</div>
                <div className="col-lg-5 box">4</div>
            </div>
        </div>
    )
}

export default Country