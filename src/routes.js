const express = require('express');
const BoxController = require('../controller/BoxController')

const view = express();

view.set('views', './views');
view.set('view engine', 'pug');
view.get('/index', (req, res) => {
    res.render('index', ({title : 'Tobias'}));
});
view.post('/boxes', BoxController.store)

module.exports = view;