const Box = require("../models/Box")
const Comment = require("../models/Comment")

class CommentController {
    async store(req, res) {
        const box = await Box.findById(req.params.id)

        const comment = await Comment.create({
            txt: req.body.txt
        })

        box.comments.push(comment);

        await box.save()

        req.io.sockets.in(box._id).emit('comment', comment)
        
        return res.json(comment)
        // Criar arquivo
    }
}

module.exports = new CommentController