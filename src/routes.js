const express = require('express');

const view = express();

view.set('views', './views')
view.set('view engine', 'pug')
view.get('/index', (req, res) => {
    res.render('index', ({title : 'Tobias'}));
})

module.exports = view;