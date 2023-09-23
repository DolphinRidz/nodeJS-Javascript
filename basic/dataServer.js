const http= require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>Hello, This is Server side</h1>");
    resp.end();
}).listen(4500);