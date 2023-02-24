/*
 * Title : API Routes
 * Description : Application Routes
 * Author : MD Tanvir Hossain
 * Date : 2/24/2023
 *
 */

// Dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

// routes object
const routes = {
  sample: sampleHandler,
};

// export module
module.exports = routes;
