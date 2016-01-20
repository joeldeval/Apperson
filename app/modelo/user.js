var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
	names: String,
	last_name: String,
	last_name_2: String,
	email: String,
	password: String
});
