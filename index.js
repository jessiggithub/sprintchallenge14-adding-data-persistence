const express = require('express');
const server = require('./api/server.js');

const Port = process.env.PORT || 5000;

server.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
});
