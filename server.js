var http = require('http');

//Lets define a port we want to listen to
var PORT=7000;
//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url+'\nTesting response on 7000');

}

//Create a server
var server1 = http.createServer(handleRequest);

//Lets start our server
server1.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log('Something good about yourself');
    console.log("Server listening on: http://localhost:%s", PORT);
});

// ******************************
var PORT2=7500;
//We need a function which handles requests and send response
function handleRequest2(request, response){
    response.end('This should be PORT2 at 7500: ' + request.url+'\nTesting response on 7500');
    

}
var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log('Something bad about yourself');
    console.log("Server listening on: http://localhost:%s", PORT2);


});