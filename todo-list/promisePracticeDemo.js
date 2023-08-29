const successPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("This will be printed.");
    }, 1000);
    setTimeout(() => {
        rejected("This will not be printed.");
    }, 2000);
});

successPromise.then((message) => {
    console.log("Success: " + message);
}).catch((message) => {
    console.log("Failed: " + message);
});


const failedPromise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("This will not be printed.");
    }, 2000);
    setTimeout(() => {
        rejected("This will be printed.");
    }, 1000);
});

failedPromise.then((message) => {
    console.log("Success: " + message);
}).catch((message) => {
    console.log("Failed: " + message);
});