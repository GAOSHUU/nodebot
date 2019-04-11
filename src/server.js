const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://reminder:reminder@cluster0-plebb.mongodb.net/reminder?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(require('./routes'));

app.listen(3333);