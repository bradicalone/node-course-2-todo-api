// const MongoClient = require('mongodb').MongoClient;   //pulling off .mongoclient from the mongodb library, connect to mongo server

const {MongoClient, ObjectID} = require('mongodb');   //pulling off .mongoclient & .ObjectID from the mongodb library (destructering), connects to mongo server

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{    // connect to database, todoApp is the new database, it takes two arguments 1st argument is a url second argument is 
if(err){															    // a callback function if connection has failed & db object use to read and write data to database
	return console.log("Unable to connect to Mongodb Server")  //return keeps the rest of the function from running
}
console.log("Connected to Mongodb Server")

// db.collection('Todos').deleteMany({   //deletes all selected field todo
// 	text: "Learn more code"
// }).then( (remove) =>{
// 	console.log(remove)
// })

db.collection('Todos').deleteOne({ //deletes only one selected field todo
	text: "learn to code"
}).then( (remove)=>{
	console.log(remove)
})

db.collection('Todos').findOneAndDelete({completed: false}).then( (result) =>{
 console.log(result);
})

// db.close();  //closes the connection with the mongodb server
})   