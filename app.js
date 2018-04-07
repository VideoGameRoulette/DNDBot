const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//Viewport
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Directory Pathing Set
app.use(express.static(path.join(__dirname, 'public')));

//Variables
var player1 = 'Username',
	p1level = 1,
	p1chp = 100,
	p1mhp = 100,
	player2 = 'Username',
	p2level = 1,
	p2chp = 100,
	p2mhp = 100;

app.get('/', function(req, res){
	res.render('index', {
		player1: player1,
		p1level: p1level,
		p1chp: p1chp,
		p1mhp: p1mhp,
		player2: player2,
		p2level: p2level,
		p2chp: p2chp,
		p2mhp: p2mhp,
	});
});

app.listen(3000, function(){
	console.log('Server Is Started On Port 3000');
});