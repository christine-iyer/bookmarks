const {model, Schema} = require('mongoose')
const bookmarkSchema = new Schema ({
     title: {required: true, type: String},
    completed: { required: true, type: String}
}, {timestamps:true
})
const Bookmark = model('Bookmark', bookmarkSchema)
module.exports = Bookmark