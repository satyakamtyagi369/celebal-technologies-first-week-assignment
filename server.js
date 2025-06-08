const {createServer} = require('node:http');
const fs = require('fs');
const port = 3000;
const hostname ='127.0.0.1';
const server = createServer((req,res)=>{
    res.statusCode = 200;
    fs.readFile('index.html','utf8',(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.write("File not found");
        }
        else{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
        }
        res.end();
    })
});
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});