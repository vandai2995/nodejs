const fs = require('fs');

//writeFileSync
let content = '';
for (let i = 0; i < 1000000; i++) {
    content += `This is line ${i}\n`;
}
fs.writeFileSync('big-file.txt', content);
console.log('File created successfully');



//readFileSync
const start = Date.now();
const text = fs.readFileSync('big-file.txt', 'utf-8');
//count line
const lines = text.split('\n').length;
console.log(`File has ${lines} lines`);
console.log(`File reading took ${Date.now() - start} ms`);

