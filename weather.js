var request = require('request');
module.exports = function (location) {
    return new Promise(function (resolve, reject) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(location) + '&appid=ff023c83da58fbc4875f80ae21429da8&units=metric';
    
        request({
        url: url, 
        json: true
        }, function(error, response, body) {
            if (typeof body.main === 'undefined') {
                reject('Unable to fetch weather.');
            } else {
                resolve('Sunt ' + body.main.temp + ' grade in ' + body.name + '.');
                //console.log(JSON.stringify(body, null, 4));
            }
        });
    });
    
}