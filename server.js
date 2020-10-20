var express = require('express');
var app = express();
var http = require('http');
var server = http.Server(app);
app.use(express.static('public'));


var PORT = process.env.PORT || 5000;

server.listen(PORT, function(){
	console.log("app has started");

});


var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection: ' + socket.id);

	socket.on('sendFiles', newVideo);

	function newVideo(video){
		socket.broadcast.emit('sendFiles', video);
	}



}