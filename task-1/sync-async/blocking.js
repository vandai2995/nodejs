const fs = require('fs');

//demo sync code
const start = Date.now();
const text = fs.readFileSync('../read-write-file/big-file.txt', 'utf-8');
console.log(`[DEMO SYNC CODE] File reading took ${Date.now() - start} ms`);
console.log('Will print this first');


//demo async code
const start2 = Date.now();
fs.readFile('../read-write-file/big-file.txt', 'utf-8', (err, text) => {
    console.log(`[DEMO ASYNC CODE] File reading took ${Date.now() - start2} ms`);
}
);
console.log('Will print this second');

//demo async code with promise
const start3 = Date.now();
const promise = new Promise((resolve, reject) => {
    fs.readFile('../read-write-file/big-file.txt', 'utf-8', (err, text) => {
        if (err) {
            reject(err);
        } else {
            resolve(text);
        }
    });
}
);
promise.then((text) => {
    console.log(`[DEMO ASYNC WITH PROMISE] File reading took ${Date.now() - start3} ms`);
}
);
console.log('Will print this third');


