/**
 * Vikram Guhilot
 */

import React, {useContext} from "react"
import {Context} from "../Context"



function Metal(){

    const {metal} = useContext(Context)

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{metal.gold}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                            <img 
                            className="img1"
                            height={170} width={450}
                            src={require('/Users/vikramguhilot/Desktop/DashboardProject/custom-info-dash/src/pages/gold.jpg') } 
                            alt="gold"/>
                        </div>
                        </div>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{metal.silver}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                        <img 
                            className="img1"
                            height={170} width={450}
                            src={require('/Users/vikramguhilot/Desktop/DashboardProject/custom-info-dash/src/pages/silver.jpg') } 
                            alt="silver"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{metal.platinum}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                        <img 
                            className="img1"
                            height={170} width={450}
                            src={require('/Users/vikramguhilot/Desktop/DashboardProject/custom-info-dash/src/pages/platinum.jpg') } 
                            alt="platinum"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{metal.silver}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                        <img 
                            className="img1"
                            height={170} width={450}
                            src={require('/Users/vikramguhilot/Desktop/DashboardProject/custom-info-dash/src/pages/palla.jpg') } 
                            alt="pallidum"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

export default Metal
