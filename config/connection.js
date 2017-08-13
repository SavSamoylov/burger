const mysql = require("mysql")



if (process.env.JAWSDB_URL){
  let connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  })
}

connection.connect((err)=>{
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
})

module.exports = connection;
