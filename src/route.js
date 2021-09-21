const express = require('express');
const questionController = require('./controllers/questionController');
const roomController = require('./controllers/roomController');

const route = express.Router();

<<<<<<< HEAD
route.get('/', (req, res) => res.render('index', {page: "enter-room"}));
route.get('/create-pass', (req, res) => res.render('index', {page: "create-pass"}));

route.get('/room/:room', (req, res) => res.render('room'));

route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create);
=======
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}));

route.get('/room/:room', (req, res) => res.render('room'));

route.post('/room/:room/:question/:action', questionController.index);
route.post('/room/create-room', roomController.create);
>>>>>>> f43bb1b8f87928db576566ebf5d6911d4bbd2a9c

module.exports = route;