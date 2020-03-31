const express = require('express');
const OngController = require('./contollers/OngController');
const IncidentController = require('./contollers/IncidentController');
const ProfileController = require('./contollers/ProfileController');
const SessionController = require('./contollers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;