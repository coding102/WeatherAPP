var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9ec9f24d36960b618105e52eab4ddc0f&units=imperial';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location); 
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        // return to chain promises
        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            // error response
            throw new Error(res.data.message);
        });
     }
}