const express = require('express');

const UserController = require('./controllers/UserController');
const QueueController = require('./controllers/QueueController');

const routes = express.Router();

routes.post('/createUser', UserController.createUser)
routes.post('/addToLine', QueueController.queuePush)
routes.get('/findPosition', QueueController.findPosition)
routes.get('/showLine', QueueController.showLine)
routes.get('/filterLine', QueueController.filterLine)
routes.delete('/popLine', QueueController.popLine)



module.exports = routes;