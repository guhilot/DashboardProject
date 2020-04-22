import React, {useEffect, useState} from 'react'

const Context = React.createContext()

function ContextProvider(props){

    const [url, setURL] = useState("")
    const [coinData, setCoinData] = useState([])

    const addr = "https://api.nomics.com/v1/currencies/ticker?key=demo-26240835858194712a4f8cc0dc635c7a&ids="
    function processCode(id){
        console.log(id)
        let upper = id.toUpperCase()
        let att = addr.concat(upper)
        setURL(att)
    }

    useEffect(()=>{
        fetch(url)
            .then(res=>res.json())
            .then(data=>setCoinData(data))
    },[url])
    console.log(coinData)

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

    return(
        <Context.Provider value={{processCode, newCoinData, moreCoinData}}>
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}