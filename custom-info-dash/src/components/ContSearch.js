/**
 * Vikram Guhilot
 */

import React, {useState, useContext} from "react"
import {Context} from "../Context"

function ContSearch(){

    const [country, setCountry] = useState({Name:""})
    const {processCountry} = useContext(Context)

    function handleSubmit(e){
        e.preventDefault()
    
        processCountry(country.Name)

    }

    function handleChange(e){
        e.preventDefault()

        const {name, value} = e.target
        setCountry(prev=>{
            return{...prev,[name]:value}
        })
    }
    
    return(
        <div className="Rcontainer">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <form className="iform" onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        placeholder="Enter country name 'Paris is not a country'" 
                        name="Name"
                        value={country.Name}
                        onChange={handleChange}
                        className="form-control"
                        />
                        <button className="btn btn-primary">Get Info</button>
                    </form>
                </div>

            </div>

        </div>
    )

}

export default ContSearch