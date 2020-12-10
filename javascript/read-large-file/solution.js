var fs = require('fs');

// Output: 1MB ?
const streamA = fs.createReadStream('1MB.bin', 'utf-8');

streamA
    .on('readable', () => {
        const start = streamA.read(3);
        if (!start) {
            console.error('Data is null or empty');
        }

        console.log('1MB:', start);
        streamA.destroy();
    });

// Output: 1000MB ?
console.time('1000');

const streamB = fs.createReadStream('1000MB.bin', {
    encoding: 'utf-8',
    start: 0,
    end: 3
});

streamB
    .on('readable', () => {
        const start = streamB.read();
        if (!start) {
            console.error('Data is null or empty');
        }

        console.log('1000MB:', start);
        console.timeEnd('1000');
        streamB.destroy();
    });