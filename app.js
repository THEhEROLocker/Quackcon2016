var express = require('express');
var request = require('request');
var server = express();

server.use(express.static('public'));

var url = 'http://api.sportradar.us/ncaafb-t1/2016/REG/2/ISU/IOW/roster.json?api_key=tvbxck4wb9aasb3png3mbwcn';

var homeTeam = [];
var awayTeam = [];

function logName(element, index, array){
    if(index < 30)
      homeTeam.push('<li>'+element.name_full+'</li>');
}

request.get(url, (err, response, body) => {
			if(!err && response.statusCode === 200){
        var jsontext = body.replace(/\//ig, '');
        var data = JSON.parse(jsontext);
				data.home_team.players.forEach(logName);
        data.away_team.players.forEach(logName);
        console.log(homeTeam.join(''));
			}
			else{
				console.log('no_data');
			}
});

server.get('/', (req, res) => {
    res.sendFile(__dirname + "/mvp.html");
});


server.get('/search', (req, res) => {
});

server.listen(8080);
