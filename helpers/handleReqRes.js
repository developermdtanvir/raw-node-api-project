/*
 * Title : handle Request and Response
 * Description : handle Request and Response for Client sides
 * Author : MD Tanvir Hossain
 * Date : 2/24/2023
 */

// Dependencies
const { StringDecoder } = require("string_decoder");
const url = require("url");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

//handler object - module scaffolding
const handler = {};

// configuration
handler.config = {};

//handle Request Response
handler.handleReqRes = (req, res) => {
  const parseURL = url.parse(req.url, true);
  const path = parseURL.pathname;
  const trimmedpath = path.replace(/^\/+|\/*$/g, "");
  const method = req.method.toLowerCase();
  const queryObjectString = parseURL.query;
  const headersObject = req.headers;

  const requestProperties = {
    parseURL,
    path,
    trimmedpath,
    method,
    queryObjectString,
    headersObject,
  };

  const chosenHandler = routes[trimmedpath]
    ? routes[trimmedpath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};
    const payloadString = JSON.stringify(payload);

    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

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

// export module
module.exports = handler;
