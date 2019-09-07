var express = require('express');

var path = require('path');

var app = express();

app.set('views',path.join(__dirname, 'views'));

app.set('view engine','pug');

app.get('/', (req, res) => {
	res.render('index');
})

app.listen(3000, () => console.log('server running....'));