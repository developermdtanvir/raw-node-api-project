/*
 * Title: Uptime Monitoring Application
 * Description : A RESTFUL API to monitoring up or down time of our user defined links
 * Author : Tanvir Hossain (Web-developer)
 * Date : 2/24/2023
 */

// Dependencies
const http = require("http");

// app object - module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);

  //listen port
  server.listen(app.config.port, () => {
    console.log(`Server Listen port on ${app.config.port}`);
  });
};

//handle Request Response
app.handleReqRes = (req, res) => {
  res.end("Hello world");
};

// start the server
app.createServer();

module.exports = app;
