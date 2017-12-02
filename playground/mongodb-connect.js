// const MongoClient = require('mongodb').MongoClient;   //pulling off .mongoclient from the mongodb library, connect to mongo server

const {MongoClient, ObjectID} = require('mongodb');   //pulling off .mongoclient & .ObjectID from the mongodb library (destructering), connects to mongo server

// var obj = new ObjectID(); //creates a new _id # from the objectID method. 
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{    // connect to database, todoApp is the new database, it takes two arguments 1st argument is a url second argument is 
if(err){															    // a callback function if connection has failed & db object use to read and write data. 
	return console.log("Unable to connect to Mongodb Server")  //return keeps the rest of the function from running
}
console.log("Connected to Mongodb Server")

db.collection('Todos').insertOne({  // adding data to the database Todos collection, insertOne lets you insert a new docuemnt into your collection, 
	text: "inserted sep-29th",       //first argument is an object of key pairs adding to the Todos Collection, and 2nd argument is the error
	completed: false
}, (err, result) =>{
	if (err) {
		return console.log("Unable to insert todo", err); // the err is the error object to see why it failed when printing. 
	}
	console.log(JSON.stringify(result.ops, undefined, 2))  // result.ops stores all the doc inserted from the insertOne() method, 
})   													  //  undefined is for the filter function, 2 is for the indentation 


// db.collection('Users').insertOne({ // adding data to the database Todos collection, insertOne lets you insert a new docuemnt into your collection, 
// 	nat: "Caucasion",				 //first argument is an object of key pairs adding to the Todos Collection, and 2nd argument is the error
// 	name: "Brad",				
// 	age: 37,
// 	location: "Carlsbad"
// }, (err, result) => {  // callback function
// 	if(err) {
// 		return console.log("Unable to insert todo", err); // the err is the error object to see why it failed when printing. 
// 	}
// 	// console.log(JSON.stringify(result.ops, undefined, 2))  // result.ops stores all the doc inserted from the insertOne() method,   													  //  undefined is for the filter function, 2 is for the indentation 
// 	console.log(result.ops[0]._id.getTimestamp()) //pulls off the [0] object in the collection then the _id number, then puts a time stamp on it
// })


// db.collection('Todos').insertOne({    // adding data to the database Todos collection, insertOne lets you insert a new docuemnt into your collection,
// 	text: 'Learn more code',	     //first argument is an object of key pairs adding to the Todos Collection, and 2nd argument is the error
// 	completed: false
// }, (err, result) =>{   	// callback function
// 	if(err){
// 		console.log('Unable to insert Todos', err)   // the err is the error object to see why it failed when printing. 
// 	}
// 	console.log(JSON.stringify(result.ops, undefined, 2))    // result.ops stores all the doc inserted from the insertOne() method,
// })															//pulls off the [0] object in the collection then the _id number, then puts a time stamp on it

// db.collection('Todos').insertMany([
// {
// 	text: 'learn to code',
// 	completed: false
// },
// {
// 	text: 'learn to code',
// 	completed: false
// }
// ]).then( (docs) => {
// 	console.log(JSON.stringify(docs, undefined, 2))
// }, (err) => {
// 	console.log("unable to add Todos", err)
// })

db.close();  //closes the connection with the mongodb server
})   