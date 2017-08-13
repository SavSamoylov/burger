const orm = require("../config/orm.js");

let burgers = {
  selectAll: (callback)=>{
    orm.selectAll("burgers",  (result)=>{
      callback(result);
    })
  },
  insertOne: (newValue, callback)=>{
    orm.insertOne("burgers", "burger_name", newValue, (result)=>{
      callback(result);
    })
  },
  updateOne: (idVal, callback)=>{
    orm.updateOne("burgers", idVal, (result)=>{
      callback(result);
    })
  }
}

module.exports = burgers;
