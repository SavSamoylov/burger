const connection = require("./connection.js")


let orm = {

  selectAll: (tableName, callback)=>{
    let queryString = "SELECT * FROM ??"

    connection.query(queryString, tableName, (err, data)=>{
      if (err){console.error("ERROR: " + err.stack)}
      callback(data)
    })
  },
  insertOne: (tableName, columnName, newValue, callback)=>{
    let queryString = "INSERT INTO ?? (??) VALUES (?)"

    connection.query(queryString, [tableName, columnName, newValue] ,(err,data)=>{
      if (err) {console.log("ERROR: ", err.stack)}
      callback(data)
    })
  },
  updateOne: (tableName, idVal, callback)=>{
    let queryString = "UPDATE ?? SET devoured = 1 WHERE id = ?"

    connection.query(queryString, [tableName, idVal], (err,data)=>{
      if (err) { console.log("ERROR: ", err.stack)}
      callback(data)
    })
  },

}

module.exports = orm;
