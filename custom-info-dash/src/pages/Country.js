import React, {useContext} from "react"
import {Context} from "../Context"

function Country(){

    const {country} = useContext(Context)

    console.log(cont)
    return(
        <div>
            <h1>Country</h1>
        </div>
    )
}

export default Country