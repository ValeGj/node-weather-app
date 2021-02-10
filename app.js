const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const forecastLocation = process.argv[2];


if(!forecastLocation){
    console.log('Please provide an address!');
}else{
    geocode(forecastLocation,(error,  {longitude, latitude, location} = {} )=>{        
        if(error){
            return console.log(error);
        }        
        forecast(latitude, longitude, 'm', (error, forecastData) => {
            if(error){
                return console.log(error);
            }
    
            console.log(location);
            console.log(forecastData);
        })
    })
}

