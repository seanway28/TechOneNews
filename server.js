const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn Routes ON
app.use(routes);

// Turn on connections for db and server
sequelize.sync({ force: falselse}).then(() => {
    app.listen(PORT, () => console.log('Now listening'));

});
