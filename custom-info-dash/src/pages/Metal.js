/**
 * Vikram Guhilot
 */

import React, {useContext} from "react"
import {Context} from "../Context"



function Metal(){

    const {metal} = useContext(Context)

    const gold = metal.map(val=>{
        if(val.Name == "Gold"){
            return val.Price
        }
    })

    const silver = metal.map(val=>{
        if(val.Name === "Silver"){
            return val.Price
        }
    })

    const palladium = metal.map(val=>{
        if(val.Name === "Palladium"){
            return val.Price
        }
    })

    const platinum = metal.map(val=>{
        if(val.Name === "Platinum"){
            return val.Price
        }
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{gold}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                            <img 
                            className="img1"
                            height={130} width={450}
                            src={require('/Users/vikramguhilot/Desktop/DashboardProject/custom-info-dash/src/pages/gold.jpg') } 
                            alt="gold"/>
                        </div>
                        </div>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{silver}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                        <img 
                            className="img1"
                            height={130} width={450}
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
                            <h1>{platinum}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                        <img 
                            className="img1"
                            height={130} width={450}
                            src={require('/Users/vikramguhilot/Desktop/DashboardProject/custom-info-dash/src/pages/platinum.jpg') } 
                            alt="platinum"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 box">
                    <div className = "row">
                        <div className = "col-lg-12 b1">
                            <h1>{palladium}</h1>
                        </div>
                        <div className = "col-lg-12 b2">
                        <img 
                            className="img1"
                            height={130} width={450}
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
