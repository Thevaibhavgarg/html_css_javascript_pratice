const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    url = req.url;
    console.log(url);
    res.setHeader('Content-Type','text/html');
    if(url == '/'){
        res.end(home);
    }
    // console.log(url);
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end('<h1 style="text-align: center;">404 Page not found</h1>');
    }
    // res.end(home);
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});