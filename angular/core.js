angular.module('Apperson', [])

function mainController($scope, $http) {
	$scope.newUser = {};
	$scope.users = {};
	$scope.selected = false;

	// Obtenemos todos los datos de la base de datos
	$http.get('/api/user').success(function(data) {
		$scope.users = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});

	// Función para registrar a una persona
	$scope.signup = function() {
		$http.post('/api/user', $scope.newUser)
		.success(function(data) {
				$scope.newUser = {}; // Borramos los datos del formulario
				$scope.users = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.updateUSer = function(newUser) {
		$http.put('/api/user/' + $scope.newUser._id, $scope.newUser)
		.success(function(data) {
				$scope.newUser = {}; // Borramos los datos del formulario
				$scope.users = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.deleteUser = function(newUser) {
		$http.delete('/api/user/' + $scope.newUser._id)
		.success(function(data) {
			$scope.newUser = {};
			$scope.users = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectUser = function(user) {
		$scope.newUser = user;
		$scope.selected = true;
		console.log($scope.newUser, $scope.selected);
	};
}
