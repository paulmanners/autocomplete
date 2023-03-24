const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'testdatabase',
	user : 'root',
	password : 'c0rsica1MySQL'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;