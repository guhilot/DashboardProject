import React, {useContext} from "react"
import CurrencySearch from "../components/CurrencySearch"
import {Context} from "../Context"

function Currency(){

    const {rate} = useContext(Context)   
    return(
        <div className="container">
            <CurrencySearch />
        </div>
    )
}

export default Currency