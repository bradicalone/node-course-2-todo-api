// const MongoClient = require('mongodb').MongoClient;   //pulling off .mongoclient from the mongodb library, connect to mongo server

const {MongoClient, ObjectID} = require('mongodb');   //pulling off .mongoclient & .ObjectID from the mongodb library (destructering), connects to mongo server

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{    // connect to database, todoApp is the new database, it takes two arguments 1st argument is a url second argument is 
if(err){															    // a callback function if connection has failed & db object use to read and write data to database
	return console.log("Unable to connect to Mongodb Server")  //return keeps the rest of the function from running
}
console.log("Connected to Mongodb Server")

// db.collection('Todos').find({
// 	_id: new ObjectID('59f13638c1c3e129c1d5b9eb') // uses the ObjectID constructer function above to querry the dabase (search database) for objects,or instead of .find() you can use findById() to find object
// }).toArray().then( (docs) =>{    //finds all documents in the Todos collection & .toArray() method puts them in a array, .then() returns a promise
// 		console.log('Todos');							   //then pass a call back of the docs and a error function incase it doesn't find 'Todos'
// 		console.log(JSON.stringify(docs, undefined, 2))													
// }, (err) => {
// 	console.log('Unable to fetch todos', err);
// })

// db.collection('Todos').find().count().then( (count) =>{    				 //finds all documents in the Todos collection & .count() method counts all of our Todos, .then() returns a promise
// 		console.log('Todos count: ' + count);							   //then an error call back function incase it doesn't find 'Todos'														
// 	  }, (err) => {
// 	console.log('Unable to fetch todos', err);
// 	})

db.collection('Users').find({ame: 'Brad'}).toArray().then( (docs) => {
	console.log(JSON.stringify(ds, undefined, 2));
}, (err) => {
	console.log('Unable to fetch todos', err);
})

// db.close();  //closes the connection with the mongodb server
})   