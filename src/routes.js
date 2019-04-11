const express = require('express');
const BoxController = require('./controller/BoxController')
const multer = require('multer')
const multerConfig = require('./config/multer')

const view = express();

view.set('views', './src/views');
view.set('view engine', 'pug');
view.get('/index', (req, res) => {
    res.render('index', ({title : 'Tobias'}));
});
view.post('/boxes', BoxController.store)
view.get('/boxes/id:', BoxController.show)
view.post('/boxes/:id/files', multer(multerConfig).single(), BoxController.store)

module.exports = view;