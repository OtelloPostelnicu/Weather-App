var url = 'http://ipinfo.io';
var request = require('request');

module.exports = function () {
    return new Promise(function (resolve, reject) {
        request ({
        url: url,
        JSON: true
        }, function(error, response, body) {
            if (error) {
                reject('Cannot get location.');
            } else {
                resolve(JSON.parse(body));
            }
        });
    });   
}