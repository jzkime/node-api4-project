require('dotenv').config();
const server = require('./api/server');
const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server for node-api4-project is running on port ${PORT}`)
})
