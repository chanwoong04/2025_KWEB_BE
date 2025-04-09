const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const printFileSize = async filename => {
    try {
        const data = await readFile(filename);
        console.log(`Data length: ${data.length} bytes`);
    } catch (error) {
        console.error(error);
    }
};

console.log('String 1');
printFileSize('./file.bin');
console.log('String 2');