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
    const [country, setCountry] = useState("")
    const [countryData, setCountryData] = useState([])
    const [countryInfo, setCountryInfo] = useState([])
    const [flag, setFlag] = useState("")
    const [moreData, setMoreData] = useState([])

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

    function processCountry(nom){
        let upper = nom.charAt(0).toUpperCase() + nom.slice(1)
        setCountry(upper)
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

    // const hold = countryData.map(region=>{
    //     return region.Response.map((place,i)=>{
    //         return { 
    //                         "id": i,
    //                         "Name":place.Name,
    //                         "RegName":place.NativeName,
    //                         "Lang":place.NativeLanguage,
    //                         "Region":place.Region,
    //                         "Lon":place.Longitude,
    //                         "Lat":place.Latitude,
    //                         "flag":place.Flag,
    //                         "curr":place.CurrencyCode,
    //                         "currSymbol":place.CurrencySymbol
    //                 }       
    //     })
    // })

    // const valData = countryData.map(city=>{
    //     return(city.Response.map(place=>{
    //         if(place.Name === country)
    //         {
    //             return (
    //                 <div className="container">
    //                     <h4>{place.Name}</h4>
    //                     <h5>{place.Region}</h5>
    //                 </div>
                    
    //             )
    //         }
    //     })
    //     )
    // })

    useEffect(()=>{
         setCountryInfo(countryData.map(place=>{
            return(place.Response.map(data=>{
                if(data.Name === country){
                    return(
                        <div className="dContainer" >
                            <div className="row">
                                <div className="col-sm-3 col-md-3 col-lg-3">{data.Region}</div>
                                <div className="col-sm-3 col-md-3 col-lg-3">{data.Name}</div>
                                <div className="col-sm-3 col-md-3 col-lg-3">{data.Longitude}</div>
                                <div className="col-sm-3 col-md-3 col-lg-3">{data.Latitude}</div>
                            </div>
                        </div>
                    )
                }
                return
            }))
          })
         )

         setFlag(
            countryData.map(place=>{
                return(place.Response.map(data=>{
                    if(data.Name === country){
                        return(
                            <div className="container" >
                                <div className="row ab">
                                    <div className="col-sm-12 col-md-12 col-lg-12 ab"><img className="ima" src={data.Flag} alt="flag" height={500} width={400} /></div>
                                </div>
                            </div>
                        )
                    }
                    return
                }))
              })

         )

         setMoreData(countryData.map(place=>{
                return(place.Response.map(data=>{
                    if(data.Name === country){
                        return(
                            <div className="dContainer" >
                                <div className="row">
                                    <div className="col-sm-3 col-md-3 col-lg-3">{data.NativeLanguage}</div>
                                    <div className="col-sm-3 col-md-3 col-lg-3">{data.NativeName}</div>
                                    <div className="col-sm-3 col-md-3 col-lg-3">{data.CurrencyCode}</div>
                                    <div className="col-sm-3 col-md-3 col-lg-3">{data.CurrencySymbol}</div>
                                </div>
                            </div>
                        )
                    }
                    return
                }))
              })
         )
    },[country])

    
   
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
            countryInfo,
            processCountry,
            flag,
            moreData
            }}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}