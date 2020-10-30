const routes = require('express').Router();
const EmailController = require('./controllers/EmailController');

routes
    // email
    .get('/listar',EmailController.index)
    .post('/cadastrar',EmailController.create)

module.exports = routes;