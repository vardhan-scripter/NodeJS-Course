const express = require('express');
const app = express();

var myconsolelog = function(req, res, next) {
	console.log("MIDDLEWARE");
	next();
}

var servertime = function(req, res, next) {
	req.requestTime = new Date(Date.now());
	next();
}

app.use(servertime);

app.get('/', (req,res) => {
	res.send('your in home page'+' and time is : '+req.requestTime);
	console.log('home page');
});


app.listen(3000,() => console.log("server is running on port number 3000"));