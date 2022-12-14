const http = require('http');

http.createServer((req, res) => {

    res.write('NodeJS');
    
    res.end();
    
    }).listen(3000);