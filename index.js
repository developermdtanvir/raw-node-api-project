/*
 * Title: Uptime Monitoring Application
 * Description : A RESTFUL API to monitoring up or down time of our user defined links
 * Author : Tanvir Hossain (Web-developer)
 * Date : 2/24/2023
 */

// Dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
  const parseURL = url.parse(req.url, true);
  const path = parseURL.pathname;
  const trimmedpath = path.replace(/^\/+|\/*$/g, "");
  const method = req.method.toLowerCase();
  const queryObjectString = parseURL.query;
  const headersObject = req.headers;
  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);
    res.end("Request End");
  });
  res.write("Creating my Server an running my server");
};

// start the server
app.createServer();

module.exports = app;
