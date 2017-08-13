const path = require('path')
const xps = require("./xps.js")
const app = xps.app();


xps.go(app,
  {
    staticView: "public",
    viewEngine: "express-handlebars",
    bodyParse: ["json", "raw", "urlencoded", "text"],
    port: 3000,
    methodOverride: true,
  }
)

let routes = require(__dirname + "/controllers/burger-controllers.js")

app.use("/", routes);
