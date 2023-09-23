const http = require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'Monkey D Luffy', email:'monkeyDLuffy@greenline.com'}));
resp.end();
}).listen(4500);