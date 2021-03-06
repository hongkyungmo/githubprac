var http = require("http");
var url = require("url");

function start(handle, route){
	var onRequest = function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("pathname : " + pathname);
		
		route(handle, pathname);
		
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
		response.end();
	}
	
	http.createServer(onRequest).listen("8888");
}

exports.start = start;