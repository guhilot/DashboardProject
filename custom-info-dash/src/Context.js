import React, {useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider(props){

    /**
     * Lifecycle Hooks
     * url: contains the final url with coin name
     * coinData: holds all the info of the coin
     * countryData: contains all the country stats
     */

    const [url, setURL] = useState("")
    const [coinData, setCoinData] = useState([])
    const [countryData, setCountryData] = useState([])
    //const [newCountry, setNewCont] = useState([])

    /**
     * url for fetching data
     */

    const countryAddr = "https://raw.githubusercontent.com/guhilot/pictures/master/country.json"
    const addr = "https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids="

    /**
     * 
     * @param {*} id gets the coin code from user input
     */
    function processCode(id){
        console.log(id)
        let upper = id.toUpperCase()
        let att = addr.concat(upper)
        setURL(att)
    }
    /**
     * exectues whenever there is a change to url to fetch new data
     */
    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setCoinData(data))
    },[url])
    /**
     * executes only once as it gets all country data
     */
    useEffect(()=>{
        fetch(countryAddr)
            .then(res=>res.json())
            .then(data=>setCountryData([data]))
    },[])

    // const {Response} = countryData

    // useEffect(()=>{
    //     setNewCont([Response])
    // },[Response])


    const country = countryData.map(region=>{
        return region.Response.map(place=>{
            return {
                        "Name":place.Name,
                        "RegName":place.NativeName,
                        "Lang":place.NativeLanguage,
                        "Region":place.Region,
                        "Lon":place.Longitude,
                        "Lat":place.Latitude,
                        "flag":place.Flag,
                        "curr":place.CurrencyCode,
                        "currSymbol":place.CurrencySymbol
                    }
        })
    })

    //console.log(country)

    /**
     * mapping over coin data to extract needed data using map for dispaly1
     */
    const newCoinData = coinData.map(coin=>{
        return(
            <div className="dContainer" key={coin.name}>
                <div className="row dd">
                    <div className="col-sm-2 "><img src={coin.logo_url} alt="Coin logo" height={30} width={30}/></div>
                    <div className="col-sm-6 ">$ {coin.price}</div>
                    <div className="col-sm-4 ">{coin.name}</div>
                </div>
            </div>
        )
    })

    /**
     * mapping over coin data to extract needed data using map for display2
     */
    const moreCoinData = coinData.map(coin=>{
      return(
            <div className="dContainer" key={coin.name}>
                <div className="row dd">
                    <div className="col-sm-1 ">{coin.id}</div>
                    <div className="col-sm-5 ">{coin.max_supply}</div>
                    <div className="col-sm-4 ">{coin.circulating_supply}</div>
                    <div className="col-sm-2 ">{coin.rank}</div>
                </div>
        </div>
      )
    })

    /**
     * mapping over coin data to extract needed data using map for display3
     */
    const extraData = coinData.map(
        coin=>{
            return(
                  <div className="dContainer" key={coin.name}>
                      <div className="row dd">
                          <div className="col-sm-1 ">{coin.id}</div>
                          <div className="col-sm-7 ">Time: {coin.price_timestamp}</div>
                          <div className="col-sm-4 ">${coin.market_cap}</div>
                      </div>
              </div>
            )
          }
    )
/**
 * Context Provider as as the source of all info and sends data to
 * which ever component needs it
 */
    return(
        <Context.Provider 
        value={{
            processCode, 
            newCoinData, 
            moreCoinData, 
            extraData,
            country
            }}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}