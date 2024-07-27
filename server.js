const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

if(req.method === 'GET' && req.url === '/'){
    const indexFile = path.join(__dirname, 'Frontend/static/index.html');
    fs.readFile(indexFile, (err, data)=>{
        if(err){
            res.writeHead(500), {'Content-Type':'text/plain'}
            res.end('Some internal server error');
            return;
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(data);
    })
}
else {
    res.writeHead(404, 
        {'Content-Type':'text/plain'}
    )
    res.end('Not Found');
}
});

const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});