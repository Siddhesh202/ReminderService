const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('../src/config/serverConfig');

const TicketController = require('./controllers/ticket-controller');
const jobs = require('./utils/job');
const { createChannel, subscribeMessage } = require('./utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('./config/serverConfig')
const EmailService = require('./services/email-service');

const setupAndStartServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    const channel = await createChannel();
    app.post('/api/v1/tickets', TicketController.create);

    subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
    
    app.listen(PORT, () => {
        console.log(`Server Started on Port: ${PORT}`);
        // jobs();
    });
}

setupAndStartServer();