import Server from './Server/Server'

const server: Server = new Server();
console.log('Before server.run() check');
server.run();

console.clear()
console.log("App socket listening 3001 port");
console.log('App started on port : ' + server.getPort());