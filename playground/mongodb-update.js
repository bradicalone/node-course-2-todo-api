// const MongoClient = require('mongodb').MongoClient;   //pulling off .mongoclient from the mongodb library, connect to mongo server

const {MongoClient, ObjectID} = require('mongodb');   //pulling off .mongoclient & .ObjectID from the mongodb library (destructering), connects to mongo server

MongoClient.connect('mongodb://localhost:27017/todoApp', (err, db)=>{    // connect to database, todoApp is the new database, it takes two arguments 1st argument is a url second argument is 
if(err){															    // a callback function if connection has failed & db object use to read and write data to database
	return console.log("Unable to connect to Mongodb Server")  //return keeps the rest of the function from running
}
console.log("Connected to Mongodb Server")



db.collection('Todos').findOneAndUpdate({				//takes three arguments, this one, the first one is the filter argument
	_id: new ObjectID('5a031edbc1c3e129c1d64533')    
}, {         //second argument
	$set: {                        //$set is part of the update operators, to update properties of your database
		completed: false    		//can only use completed: true with the $set (updated operator)
	}
}, {  		//3rd and final argument of the options were using returnOriginal. When false, returns the updated document rather than the original. The default is true. 
 returnOriginal: false
}).then((result) => {
	console.log(result)
})



db.collection('Todos').findOneAndUpdate({
	_id: new ObjectID('5a0331a6c1c3e129c1d646d9')       //updating the document with this Id #
},{
	$set: {												//$set is part of the update operators, to update properties of your database
		name: 'Bradical'								// updating the name property to "Bradical"
	},
	$inc: {           									//$inc will increment the day property by 2
		day: 2
	}
}, {		//3rd and final argument of the options were using returnOriginal. When false, returns the updated document rather than the original. The default is true. 
	returnOriginal: false
}).then((result) => {
	console.log(result)

})

  //db.close();
});