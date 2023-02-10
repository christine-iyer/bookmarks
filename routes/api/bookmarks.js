const router = require('express').Router()
const blogCtrl = require('../../controllers/api/blogs')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/* /api/blogs/:id
DELETE
destroy blog
*/
router.delete('/:id', checkToken, ensureLoggedIn, blogCtrl.destroyBlog, blogCtrl.respondWithBlog)
/*
/api/blogs/:id
PUT
update blog
*/
router.put('/:id', checkToken, ensureLoggedIn, blogCtrl.updateBlog, blogCtrl.respondWithBlog)
/*
/api/blogs
POST
create blog
*/
router.post('/', checkToken, ensureLoggedIn, blogCtrl.createBlog, blogCtrl.respondWithBlog)

module.exports = router
