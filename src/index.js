const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { PORT } = require('../src/config/serverConfig');

const setupAndStartServer = async () => {

    app.listen(PORT, () => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));

        console.log(`Server Started on Port: ${PORT}`);
    });
}

setupAndStartServer();