/**
 * Vikram Guhilot
 */

import React, {useContext, useState} from "react"
import {Context} from "../Context"

function Search(){

    const [coin, setCoin] = useState({Coin:""})

    const {processCode} = useContext(Context)

    function handleChange(e){
        e.preventDefault()

        const {name, value} = e.target
        setCoin(prev=>{
            return{...prev,[name]:value}
        })

    }
    console.log(coin.Coin)
    function handleSubmit(e){
        e.preventDefault()
        processCode(coin.Coin)
    }

    return(
        <div className="Rcontainer">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <form className="iform" onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        name="Coin"
                        value={coin.Coin}
                        placeholder="Enter crypto code ex. LTC, BTC"
                        onChange = {handleChange}
                        className="form-control fm1"
                        />
                        <button className="btn btn-primary bpad">Search</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Search