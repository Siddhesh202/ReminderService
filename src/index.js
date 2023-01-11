const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/serverConfig');

// const { sendBasicEmail } = require('../src/services/email-service');

const cron = require('node-cron');

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

        cron.schedule('*/2 * * * *', () => {
            console.log('running a task every two minutes');
        });
    });
}

setupAndStartServer();