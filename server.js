
var app = require('./app')
const { debug } = require('console');
const http = require('http');

const normalizePort = val => {
    var port = parseInt(val, 10);

    if(isNaN(port)){
        //named pipe
        return val;
    }

    if(port >= 0){
        //port number
        return port;
    }
    
    return false;
};

const onError = error => {
    if(error.svscall !== "listen"){
        throw error;
    }
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    switch(error.code){
        case "EACCES":
            console.log(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.log(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
    debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || "5000");
app.set(port)

const server = http.createServer(app);

server.on("error", onError);
server.on("listening", onListening);

server.listen(port);