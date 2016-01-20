var User = require('./modelo/user');
var Controller = require ('./controller');

module.exports = function(app) {

	// devolver todos los Personas
	app.get('/api/user', Controller.getUser);
	// Crear una nueva Persona
	app.post('/api/user', Controller.setUser);
	// Modificar los datos de una Persona
	app.put('/api/user/:user_id', Controller.updateUser);
	// Borrar una Persona
	app.delete('/api/user/:user_id', Controller.removeUser);
	// application
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
