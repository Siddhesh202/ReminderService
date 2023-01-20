const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/serverConfig');

// const { sendBasicEmail } = require('../src/services/email-service');

const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');
const { createChannel } = require('./utils/messageQueue');
const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    // const channel = await createChannel();
    app.post('/api/v1/tickets', TicketController.create);
    
    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'scpisal_b20@it.vjti.ac.in',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // )

    });
}

setupAndStartServer();