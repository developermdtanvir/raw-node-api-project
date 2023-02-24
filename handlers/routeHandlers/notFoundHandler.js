/*
 * Title : Not Found  Route
 * Description : This is Not Found Route
 * Author : MD Tanvir Hossain
 * Date : 24/2/2023
 */

// sampleHandle object - module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(404, {
    message: "Page Not Found",
  });
};

// export module
module.exports = handler;
