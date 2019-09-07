const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/login',express.static(__dirname + "/public"));

app.get('/',(req, res) => {
	res.send("homepage");
	console.log('homepage');
});

app.post('/login',(req, res) => {
	res.send("welcome "+req.body.email);
});

app.listen(3000, () => console.log("server running on port number 3000"));