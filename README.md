# mongoose-compose-example

An example to quickly get your up and running with MongoDB on IBM Compose.io. 

This example shows how to use a custom MongoDB database, instead of the default `admin` db.

## Setup

1. In the project root, create the file `mongo.cert` 
2. Populate `mongo.cert` with your Compose.io MongoDB certificate
3. Open `index.js`
4. Update line 9 with your MongoDB url.

	**Note** When using Mongoose, the default Compose.io MongoDB connection string only works with the `admin` db. To use a custom db, you must restructure the connection string according the the format described in [the code](/index.js) and below.
	
	**URL Format** 
	
	```shell
		mongodb://admin:admin@host1.com:27018,host2:27018/myDb?ssl=true&authSource=admin
	```
	
5. Execute `node index`

**Star** this repo if this helps

Happy coding!

# License 
MIT 