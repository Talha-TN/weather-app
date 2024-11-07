import React, { useEffect, useState } from 'react'

const Weather = () => {
    const [cityData,setCityData]=useState("")
    const handlesubmit=()=>{
    }
    useEffect(()=>{
     const getApiData = async () =>{
        let result = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pakistan?unitGroup=metric&key=52FRGRFQSC899RRZXT99KHWB6&contentType=json")
        result = result .json()
        setCityData(result)
     }
     getApiData()   
    },[])
    console.log(cityData)
  return (
    <>
        <input type="text" placeholder='enter city' value={cityData} onChange={handlesubmit} />
        <button>get weather</button>
        <div className="">
            <p>city</p>
            <p>tempreture</p>
            <p>forcast</p>
        </div>
    </>
  )
}

export default Weather