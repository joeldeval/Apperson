var User = require('./modelo/user');

// Obtiene todos los objetos User de la base de datos
exports.getUser = function (req, res){
	User.find(
		function(err, user) {
			if (err)
				res.send(err)
					res.json(user); // devuelve todas las USer en JSON
				}
			);
}

// Guarda un objeto USer en base de datos
exports.setUser = function(req, res) {
console.log(req);
		// Creo el objeto User
		User.create(
			{ names : req.body.names,
				last_name: req.body.last_name,
				last_name_2: req.body.last_name_2,
				email: req.body.email,
				password: req.body.password
			},
			function(err, user) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				User.find(function(err, user) {
				 	if (err)
				 		res.send(err)
				 	res.json(user);
				});
			});

	}

// Modificamos un objeto Persona de la base de datos
exports.updateUser = function(req, res){
	User.update( {_id : req.params.user_id},
					{	$set:{
							names : req.body.names,
							last_name: req.body.last_name,
							last_name_2: req.body.last_name_2,
							email: req.body.email,
							password: req.body.password
						}
					},
					function(err, user) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, user) {
				 	if (err)
				 		res.send(err)
				 	res.json(user);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removeUser = function(req, res) {
	User.remove({_id : req.params.user_id}, function(err, user) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			User.find(function(err, user) {
				if (err)
					res.send(err)
				res.json(user);
			});
		});
}
