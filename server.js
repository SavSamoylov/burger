const path = require('path')
const xps = require("./xps.js")
const app = xps.app();
let routes = require(__dirname + "/controllers/burger-controllers.js")

xps.go(app,
  {
    viewEngine: "express-handlebars",
    bodyParse: ["json", "raw", "urlencoded", "text"],
    port: 3000,
    methodOverride: true,
  }
)



app.use("/", routes);
