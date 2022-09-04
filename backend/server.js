const http = require('http');
const app = require('./app.js');


const server = http.createServer(app);
const port = process.env.port || 3000;


server.on('error', error => console.log(error));
server.listen(port, () => console.log(`Server running on port ${port}`));