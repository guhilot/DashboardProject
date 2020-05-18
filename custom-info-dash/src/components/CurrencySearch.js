/**
 * Vikram Guhilot
 */

import React, {useState, useContext} from "react"
import {Context} from "../Context"


function CurrencySearch(){

    const [currency, setCurrency] = useState({amt:"",From:"", To:""})

    const {getCurrency,rate} = useContext(Context)

    function handleChange(e){
        e.preventDefault()
        const {value, name} = e.target
        setCurrency(prev=>{
            return {...prev,[name]:value}
        })
    }
    
    function handleSubmit(e){
        e.preventDefault()

        getCurrency(currency.amt, currency.From, currency.To)
    }

    return(
        <div className="Ccontainer">
            <div className="row dd6">
                <div className="col-sm-12 col-md-12 col-lg-12 boxd">
                    <h2 className="cen">Currency Convertor</h2>
                    <form className="iform" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Enter Amount eg 1"
                        name="amt"
                        value={currency.amt}
                        onChange={handleChange}
                        className="form-control"
                        />
                        <input 
                        type="text"
                        placeholder="Enter currency eg USD"
                        name="From"
                        value={currency.From}
                        onChange={handleChange}
                        className="form-control"
                        />
                        <input 
                        type="text"
                        placeholder="Enter currency eg CAD"
                        name="To"
                        value={currency.To}
                        onChange={handleChange}
                        className="form-control"
                        />
                        <button className="bz btn btn-primary">
                            Convert
                        </button>
                    </form>
                </div>
            </div>

            <div className="row dd6">
                <div className="col-sm-12 col-md-12 col-lg-12 boxd">
                    <h2 className="cen">{rate.amount}</h2>
                </div>
                
            </div>
            
        </div>
    )
}

export default CurrencySearch