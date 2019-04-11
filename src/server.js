const express = require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://fury:kingmu910@cluster0-plebb.mongodb.net/telebot?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(require('./routes'));

app.listen(3333);