const {logger} = require("../logger/logger");

process.on("uncaughtException", (err) => {
  console.log("uncaughtException");
  logger.error(err.message, err);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection ---------");
  logger.error(err.message, err);
});

function handleErrors(error, request, response, next) {
  console.log(error);
  try {
    if (response.statusCode === 200) {
      logger.error(err.message, err);
      response.status(500);
    }
    response.json({error: error.message || "something went Wrong"});
  } catch (error) {
    console.log(error);
    next();
  }
}

module.exports = handleErrors;
