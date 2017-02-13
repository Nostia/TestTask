var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
	if(request.method == 'GET') {
		switch (request.url) {
			case  '/get1':
				sendResponse(response, "pong1")
				break;
			case  '/get2':
				sendResponse(response, "pong2")
				break;
			case  '/get3':
				sendResponse(response, "pong3")
				break;
			default:
				send404Response(response)
		}
	} else {
		send404Response(response)
	}
}

function sendResponse(response, text) {
	response.writeHead(200, {"Context-Type": "text/html", "Access-Control-Allow-Origin": "http://localhost:3000"});
	response.write(text);
	response.end()
}

function send404Response(response){
	response.writeHead(404, {"Context-Type": "text/plain", "Access-Control-Allow-Origin": "http://localhost:3000"});
	response.write("Error 404: I don't have a pong for you");
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....")
