const routes = require("express").Router();

routes.use("/", require("./swagger"));
routes.use("/", require("./auth"));
routes.use("/", require("./posts"));
routes.use("/", require("./users"));

module.exports = routes;
