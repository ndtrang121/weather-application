const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=88905e264c913bd3b9acf804161ae9ed&query=' + latitude + ',' + longitude
    
    request({ url, json: true }, (error, { body }) => {
      if(error){
          callback('Unable to connect to weather service', undefined)
      } else if(body.error){
          callback(body.error.info, undefined)
      }
      else{
          callback(undefined, body.current.weather_descriptions[0] + `. It is currently ${body.current.temperature} degrees out, feels like ${body.current.feelslike} degrees out.`)
      }
    })
  }
  
  module.exports = forecast