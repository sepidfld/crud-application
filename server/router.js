const express = require('express');
const route = express.Router();
const userdbs = require('./model');
const render = require('./render');
const controller = require('./controller');

route.get('/',render.homeroutes);
route.get('/update-user', render.update_user)
// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/', controller.update);
// route.delete('/api/users/:id', controller.delete);


module.exports = route