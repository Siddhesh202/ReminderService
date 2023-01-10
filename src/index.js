const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/serverConfig');

const { sendBasicEmail } = require('../src/services/email-service');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com',
        //     'scpisal_b20@it.vjti.ac.in',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // )
    });
}

setupAndStartServer();