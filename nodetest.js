//require('os');
//console.log("HI I am here");
//os.hostname();


var mysql  = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'employee'
});

connection.connect();

connection.query('SELECT * from emp', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();

