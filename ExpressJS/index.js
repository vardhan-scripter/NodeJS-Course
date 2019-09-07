var express = require('express');

var app = express();

app.get('/', (req,res) => {
	res.send('your in home page');
});

app.get('/about', (req,res) => {
	res.send('your in about page');
});

// app.get('/********', (req,res) => {
// 	res.send('your in regex page');
// });

app.get('/user/:id/status/:status_id', (req,res) => {
	res.send(req.params.id);
});

app.get('/flights/:from-:to', (req,res) => {
	res.send(req.params);
});

app.get('/json', (req,res) => {
	res.json({name : "sai",password : "12345",uniqueid : "eujwdqf27356t7y"});
});

app.post('/login', (req,res) => {
	res.send('login successfull');
});

app.listen(3000,() =>{
	console.log("server is running on port number 3000");
})