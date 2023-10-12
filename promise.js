const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({ username: "shashu", email: "shashu@example.com" });
    }, 1000);
});

promiseThree.then(function(user) {
    console.log(user);
});

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false; // Change this to false to resolve the promise
        if (!error) {
            resolve({ username: "shashank", password: "123" });
        } else {
            reject('ERROR: Something went wrong');
        }
    }, 1000);
});

promiseFour
    .then(function(user) {
        console.log(user);
        return user.username;
    })
    .then(function(username) {
        console.log(username);
    })
    .catch(function(error) {
        console.error(error);
    }).finally(() => console.log("The promise is either resolved or rejected"))

    const promiseFive = newPromise(function(resolve,reject){
        setTimeout(function() {
            let error = false; 
            if (!error) {
                resolve({ username: "js", password: "123" });
            } else {
                reject('ERROR: Js went wrong');
            }
        }, 1000)
    });
    