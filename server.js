const http = require('http');
const fs = require('fs');
const path = require('path');
const url  = require('url');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname; 

//endpoint for serving homepage on get request
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

//endpoint for variable url
else if (req.method === 'GET' && pathname.startsWith('/users/')) {
    const username = pathname.split('/')[2];
    const usersdata = path.join(__dirname, 'Backend/users.txt');

    fs.readFile(usersdata, 'utf8', (err, data)=>
    {
        if(err){
            res.writeHead(500, {'Content-Type':'text/plain'});
            res.end('Server Error');
        }
        const users = data.split('\n').map(line => line.trim());
        if (users.includes(username)) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(`<h1>Hello, ${username}!</h1><p>Welcome to your personalized page.</p>`);
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('<h1>User Not Found</h1><p>The username you are looking for does not exist.</p>');
        }
    })
} 
//endpoint for api request
else if(req.method==='GET' && req.url === '/api/data'){
    const apidata = path.join(__dirname, 'Frontend/static/api data/text.txt');
    fs.readFile(apidata, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, {'Content-Type':'text/plain'})
            res.end('Server Error')
            return;
        }
        send_data = {
            message: data,
            timestamp: new Date() 
        };
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(send_data));
    })
}

//endpoint for bad request
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