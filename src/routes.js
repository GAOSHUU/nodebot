const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')
const routes = express.Router()

const BoxController = require('./controllers/BoxController')
const FileController = require('./controllers/FileController')
const CommentController = require('./controllers/CommentController')

routes.get("/", (req, res) => {
    res.send("Hello World")
})

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);
routes.post("/boxes/:id/files",
    multer(multerConfig).single("file"),
    FileController.store
);
routes.post("/boxes/:id/comments", CommentController.store);

module.exports = routes;