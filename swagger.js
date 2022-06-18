const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Project 2 API",
    description: "Users API",
  },
  host: "cse341-p2.herokuapp.com",
  schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./index.js"];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
//   await import('./index.js');
// });
// });
