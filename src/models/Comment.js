const mongoose = require('mongoose')

const Comment = new mongoose.Schema({
    //title: { type: String, require: true },
    txt: {
        type: String,
        require: true
    }
}, {
        timestamps: true,
    });


module.exports = mongoose.model("Comment", Comment)