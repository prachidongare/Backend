const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config/config");
const upload = require("express-fileupload");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const db = require('./config/sequilizeconfig');
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "UMS API",
			version: "1.0.0",
			description: "API'S documentation",
		},
		servers: [
			{
				url: "http://localhost:5000",
			},
			{
				url: "http://192.168.1.101:5000",
			},
			{
				url: "http://192.168.1.102:8000",
			},
		],
	},
	apis: ["./app/routes/*.js"],
};

const specs = swaggerJsDoc(options);
// create express app
const app = express();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
 
app.use(upload());
app.use(bodyParser.urlencoded({ limit: '50mb' }));
// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(morgan("dev"));
// const appRouter = require("./app/routes/app.routes");
var appRouter = require("./app/routes/app.routes");

appRouter.initialize(app);
/* Request Middleware */
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Headers", "token");
  res.header("Access-Control-Max-Age", "600");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "public")));
app.listen(config.serverPort, () => {
  console.log("Server is listening on port ", config.serverPort);
});
try {
  db.sequelize.authenticate()
.then(()=>{
    console.log('DB CONNECTED');
})
.catch(err => {
    console.log(`Error ${err}`);
});
  
} catch (error) {
  console.error('Unable to connect to the database:', error); 
}
module.exports = app;
