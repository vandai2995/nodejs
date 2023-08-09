const http = require('http');


const server = http.createServer((req, res) => {
    res.write('Hello from Node.js');
    res.end();
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Path: task-1/server/package.json