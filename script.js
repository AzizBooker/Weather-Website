"use strict"
//TODO set up Api key in external module and gitignore file
//import { apiKey } from './ApiKey';

const apiKey='fd01f9165e8b0b3a6982d90d1d1d9fff'
//TODO Select DOM elements

//TODO  Take in city search input and pass into Weather Data API


const unitTypes={'imperial': 'imperial','metric':'metric'}
Object.freeze(unitTypes)

//TODO Fetch Weather Data and convert to javacript object
function Weather(){

    let cityName='N/A'
  
    const fetchWeather=async function(ApiKey, city = 'new york',units='imperial') {
        let weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${ApiKey} `
        console.log('AS')
        try {
           
            const response = await fetch(weatherUrl, { mode: "cors" })
    
            const weatherData= await response.json()
            const cityName= weatherData.name;
            const weather= weatherData.weather
            const wind=weatherData.wind
            const temp= weatherData.main
            const cord=weatherData.coord;
            const clouds= weatherData.clouds;
            const rain= weatherData.rain
            const snow= weatherData.snow
            
            console.log(weatherData)
            console.log(cityName)
            console.log(weather)
            console.log(wind)
            console.log(temp)
            console.log(cord)
            console.log(clouds)
            console.log(rain)
            
            this.weatherData=weatherData;
            this.cityName=cityName
            this.weather=weather
            
            
        }
        catch(err){
           console.log('Error')
           console.log(err)
        }
        
    }

    const getName=function(){
        console.log(`City Name:${cityName}`)
    }
   
return {fetchWeather,getName}
}


//FetchWeather('fd01f9165e8b0b3a6982d90d1d1d9fff','new york')
const weather=new Weather()
weather.fetchWeather(apiKey,'new york',unitTypes.imperial)
weather.getName()


//TODO Replace DOM Text content with correct data 






