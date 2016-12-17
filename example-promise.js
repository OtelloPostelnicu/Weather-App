var request = require('request');
//function doWork (data, callback) {
//    callback('done');
//}
//
//function doWorkPromise (data) {
//    return new Promise(function (resolve, reject) {
//        setTimeout(function() {
//            reject('everything is broken');
//        }, 1000);
////        reject({
////            error: 'something bad happened'
////        });
//    });
//}
//
//doWorkPromise('some data').then(function (data) {
//    console.log(data);
//},
//    function(error) {
//    console.log(error);
//});

function getWeather (location) {
    return new Promise(function (resolve, reject) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(location) + '&appid=ff023c83da58fbc4875f80ae21429da8&units=metric';
    
    request({
    url: url, 
    json: true
}, function(error, response, body) {
    if (error) {
        reject('Unable to fetch weather.');
    } else {
        resolve('Sunt ' + body.main.temp + ' grade in ' + body.name + '.');
        //console.log(JSON.stringify(body, null, 4));
    }
});
    })
}

getWeather('New York').then(function (currentWeather) {
    console.log(currentWeather);
}), function (error) {
    console.log(error);
}