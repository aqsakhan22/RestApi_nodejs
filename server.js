const http = require('http');
const app =require('./app');
const dotenv=require('dotenv');
dotenv.config();
const port=80;
const server =http.createServer(app);
server.listen(port,() => console.log(`server is running on ${port}`));



