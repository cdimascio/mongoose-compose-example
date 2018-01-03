# mongoose-compose-example

An example to quickly get your up and running with MongoDB on IBM Compose.io. 

This example shows how to use a custom MongoDB database, instead of the default `admin` db.

## Setup

1. In the project root, create the file `mongo.cert` 
2. Populate `mongo.cert` with your Compose.io MongoDB certificate
3. Open `index.js`
4. Update line 9 with your MongoDB url.

	**Note** follow the template in the code comments. The default compose.io url will not work. You will specify your database name in the url
	
5. Execute `node index`

# License 
MIT 