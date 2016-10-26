var http = require('http');

//Lets define a port we want to listen to
var PORT=7000;
var PORT=7500;
//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(7000, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log('Something good about yourself');
});

server.listen(7500, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log('Something bad about yourself');
});