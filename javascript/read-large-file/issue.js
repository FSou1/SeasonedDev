var fs = require('fs');

// Output: 1MB ?
fs.readFile('1MB.bin', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    const start = data.slice(0, 3);
    console.log('1MB:', start);
});

// Output: 100MB ?
console.time('100');
fs.readFile('100MB.bin', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    const start = data.slice(0, 3);
    console.log('100MB:', start);
    console.timeEnd('100');
});

// Output: 1000MB ?
fs.readFile('1000MB.bin', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    const start = data.slice(0, 3);
    console.log('1000MB:', start);
});