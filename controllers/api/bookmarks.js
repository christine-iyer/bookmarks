const Bookmark = require('../../models/bookmark')


module.exports = {
     create, 
     indexComplete, 
     indexNotComplete,
     show,
     update, 
     destroy, 
     jsonBookmarks, 
     jsonBookmark
}

//jsonBookmark, jsonBookmarks
function jsonBookmark(req,res){
     res.json(res.locals.data.bookmark)
}
function jsonBookmarks(req, res) {
     res.json(res.locals.data.bookmarks)
}

//create
async function create(req, res, next){
     try {
          const bookmark = await Bookmark.create(req.body)
          console.log(bookmark)
          res.locals.data.bookmark = bookmark
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })
          
     }
}
//read- index, show
async function indexComplete(req,res,next) {
     try {
          const bookmarks = await Bookmark.find({ completed:true })
          res.locals.data.bookmarks = bookmarks
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })
          
     }
}

async function indexNotComplete(req,res,next) {
     try {
          const bookmarks = await Bookmark.find({ completed:false })
          res.locals.data.bookmarks = bookmarks
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })
          
     }
}
//show
async function show (req, res, next) {
     try {
          const bookmarks = await Bookmark.findById(req.params.id)
          res.locals.data.bookmark = bookmark
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })
     }
}
//update
async function update (req, res, next) {
     try {
          const bookmark = await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new : true }
               )
          res.locals.data.bookmark = bookmark
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })
     }
}
//destroy
async function destroy (req, res, next) {
     try {
          const bookmark = await Bookmark.findByIdAndDelete(req.params.id)
          res.locals.data.bookmark = bookmark
          next()
     } catch (error) {
          res.status(400).json({ msg: error.message })
     }
}


