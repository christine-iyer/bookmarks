const { Schema, model } = require('mongoose')

const blogSchema = new Schema({
  title: { type: String, required: true },
  category: {type: String},
  url: { type: String, required: true }, 
  body: { type: String, required: true }
}, {
  timestamps: true
})

module.exports = model('Blog', blogSchema)