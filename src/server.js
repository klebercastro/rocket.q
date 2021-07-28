<<<<<<< HEAD
const express = riquire('express')

const server = express()

server.listen(5000, () => console.log('Server started'))
=======
const express = require('express');
const route = require('./route');
const path = require('path');

const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.static('public'));
server.use(route);

server.listen(8080, ()=> console.log('Server started'));
>>>>>>> e475daeb3e0160366ebd9169143ba23f6de9a9c1
