const request = require('request')

const url = 'https://api.darksky.net/forecast/07db7993954ef2e997026db384e8f93c/37.8267,-122.4233'

const forecast = (longitute, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/07db7993954ef2e997026db384e8f93c/' + 
    longitute + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast