require('dotenv').config()
const Blog = require('../../models/blog')
const User = require('../../models/user')

// delete blog
// create blog
// update blog

const destroyBlog = async (req, res, next) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id)
    res.locals.data.blog = deletedBlog
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.locals.data.blog = updatedBlog
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const createBlog = async (req, res, next) => {
  try {
    const createdBlog = await Blog.create(req.body)
    const user = await User.findOne({ email: res.locals.data.email })
    user.blogs.addToSet(createdBlog)
    await user.save()
    res.locals.data.blog = createdBlog
    next()
  } catch (error) {
    res.status(400).json({ msg: error.message })
  }
}

const respondWithBlog = (req, res) => {
  res.json(res.locals.data.blog)
}

module.exports = {
  destroyBlog,
  updateBlog,
  createBlog,
  respondWithBlog
}