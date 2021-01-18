//TODO Select DOM elements
"use strict"

//TODO  Take in city search input and pass into Weather Data API



//TODO Fetch Weather Data and convert to javacript object

async function FetchWeather(ApiKey, city = 'new york',units='imperial') {
    let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${ApiKey} `
    try {
       
        const response = await fetch(weatherUrl, { mode: "cors" })

        const weatherData=await response.json()
        const name=weatherData.name;
        const weather=weatherData.weather[0]
        const wind=weatherData.wind
        const temp=weatherData.main
        console.log(weatherData)
        console.log(wind)
        console.log(temp)
        
        
        
            
    }
    catch(err){
        console.error(`Error Message:${err}`)
        console.error(`Error Code:${err.cod}`)
    }
    
}

FetchWeather('fd01f9165e8b0b3a6982d90d1d1d9fff','new york')

//TODO Replace DOM Text content with correct data 






