const express = require('express');
const routes = require('./routes/');
const sequelize = require('./config/connection');
const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils"}));

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Turn Routes ON
app.use(routes);

// Turn on connections for db and server
sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));

});

