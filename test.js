var url = 'http://ipinfo.io';
var request = require('request');

request ({
        url: url,
        JSON: true
    }, function(error, response, body) {
        if (error) {
            console.log();
        } else {
            var bodyy = JSON.parse(body)
            console.log(bodyy);
        }
    });