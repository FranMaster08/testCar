const telnet = require('telnet-client');
const server = new telnet();

// display server response
server.on("data", function(data){
    console.log(''+data);
});

// login when connected
server.on("connect", function(){
    server.write("login <user> <pass>");
});

// connect to server
server.connect({
    host: "172.16.0.1",
    port: 9600
});