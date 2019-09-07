const http = require('http');

const hostname = '127.0.0.1';

const portnumber = '5000';

http.createServer((req,res) =>{
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<center><h1>Hello World</h1></center>');
} ).listen(portnumber, hostname, () =>{
	console.log('server is running at http://127.0.0.1:5000/');
});