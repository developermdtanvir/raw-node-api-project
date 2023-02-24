/*
 * Title : Sample Route
 * Description : This is Sample Handle Rote
 * Author : MD Tanvir Hossain
 * Date : 24/2/2023
 */

// sampleHandle object - module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  callback(200, {
    message: "This is a Sample url",
  });
};

// export module
module.exports = handler;
