var fs = require('fs');
var mongoose = require('mongoose');
var { Schema } = mongoose;
var { String } = Schema.Types;

// TODO Replace the following connection string with your IBM Compose MongoDB connection string.
// NOTE: Be sure to follow the template below using your connection information
// e.g. mongodb://admin:admin@host1.com:27018,host2:27018/myDb?ssl=true&authSource=admin'
var connectionUrl =
  'mongodb://<username>:<password>@<hostname>:<port>,<hostname-n>:<port-n>/<db-name>?ssl=true&authSource=admin';
var sslCA = [fs.readFileSync('mongo.cert')];
var options = {
  ssl: true,
  sslValidate: true,
  sslCA,
};

var db = mongoose.createConnection(connectionUrl, options);
var mySchema = new Schema({
  name: String,
});
var MyModel = db.model('MyModel', mySchema);
var myModel = new MyModel({ name: 'Carmine' });

MyModel.create(myModel)
  .then(() => MyModel.find().then(_ => console.log(_)))
  .catch(e => console.error(e))
  .then(() => mongoose.disconnect());
