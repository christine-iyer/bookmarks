const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')

// Index /api/bookmarks
router.get('/', bookmarkCtrl.indexNotComplete, bookmarkCtrl.jsonBookmarks)
//Index /api/bookmarks/completed
router.get('/completed', bookmarkCtrl.indexComplete,  bookmarkCtrl.jsonBookmarks)
//Delete /api/bookmarks/:id
router.delete('/:id', bookmarkCtrl.destroy, bookmarkCtrl.jsonBookmark)
//Update /api/bookmarks/:id
router.put('/:id', bookmarkCtrl.update, bookmarkCtrl.jsonBookmark)
//Create /api/bookmarks
router.post('/', bookmarkCtrl.create, bookmarkCtrl.jsonBookmark)
//Show /api/bookmarks/:id
router.get('/:id', bookmarkCtrl.show, bookmarkCtrl.jsonBookmark)

module.exports = router