const { Router } = require('express');
const  DevController = require ('./controllers/DevController');
const SeachController = require ('./controllers/SeachController');

const routes = Router();
//get, post, put, delete
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SeachController.Index);
module.exports = routes;