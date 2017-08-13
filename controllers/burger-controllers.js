const express = require('express');
const burgers = require("../models/burger.js");

let router = express.Router();

router.get("/", (req, res)=>{

  burgers.selectAll((result)=>{
    let handlebarsObj = {
      burgers: result
    }
    res.render("index", handlebarsObj)
  });
})

router.put("/:id", (req,res)=>{
  let burger_id = req.params.id;

  burgers.updateOne(burger_id, (result)=>{
    res.redirect("/")
  })

})

router.post("/", (req,res)=>{
  let burgerName = req.body.burger_name;

  burgers.insertOne(burgerName, (result)=>{
    res.redirect("/");
  })
})

module.exports = router;
