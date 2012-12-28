var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//Connect to cloud database
var username = "kerrieyee";
var password = "jammers3";
var address = '@ds045897.mongolab.com:45897/authentication';
connect();

//Connect to mongoose
function connect() {
	var url = 'mongodb://' + username + ':' + password + address;
	mongoose.connect(url);
}
function disconnect() {mongoose.disconnect()}