//importando o express
const express = require('express');

const routes = new express.Router();

routes.get('/', (req, res) => {
    return res.send('Olá world');
})


module.exports = routes;