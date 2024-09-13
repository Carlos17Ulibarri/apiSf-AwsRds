const express = require("express");
const {sfRoutes} = require ("./src/Services/taskRoutes");
const morgan = require("morgan");
const {server} = require("./src/Services/client");

const app = express();

app.listen(server.port);
console.log('Server running on PORT 3000');

app.use(express.json({extend:true}));
app.use(morgan('dev'));

const mainRoute = '/apiSf-AwsRds';
app.use(mainRoute,sfRoutes());

module.exports = {
    express
};