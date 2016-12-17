function doWork(shouldFail) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof shouldFail === 'boolean' & shouldFail === true) {
                reject('error message');
            } else {
                resolve('succes');
            }
        }, 1000);
    });
}

doWork().then(function (message) {
    console.log(message);
    return doWork(true);
}).then(function (message) {
    console.log(message);
    console.log('all done!');
}).catch(function (error) {
    console.log(error);
});