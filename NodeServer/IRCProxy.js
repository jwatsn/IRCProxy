

var WebSocketServer = require('ws').Server,
wss = new WebSocketServer({port: 1337});

try {
wss.on('connection', onConnect);
}
catch(err) {
console.log(err);
}

function onConnect(ws) {



ws.on('message', function(message) {

if(message.substr(0,2) == '/~')
{        
	handleProxyRequest(message,ws)
}
else
{
	ws.client.write(message + '\r\n');
}

});

ws.on('close', function() {

	ws.client.write("QUIT :Buhbye\r\n");
	ws.client.destroy();
});


}


function handleProxyRequest(message, ws)
{


var net = require('net');

var c_string = message.substr(2,message.len).split(','); //hostname,port




client = net.connect({port: c_string[1], host: c_string[0]});

client.on('data', function(data) {
	console.log(data.toString());
  ws.send(data.toString());
});

client.on('end', function() {
  	console.log('client disconnected');
});

ws.client = client;
}

function setUpProxy()
{
}

function handleClientMsg(message)
{
}