const express = require('express');
const cors = require('cors');
const server = express();
const apiRouter = require('./api-router')

server.use(express.json());
server.use(cors());

server.use('/api', apiRouter);

server.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json(error.message || "internal server error")
})

module.exports = server;