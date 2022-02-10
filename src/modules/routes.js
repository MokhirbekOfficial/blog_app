const { Router } = require('express')
const router = new Router()

const admin = require('./admin/admin')
const superAdmin = require('./superAdmin/superAdmin')
const token = require('./token/token')
const user = require('./user/user')
router
    .get('/posts', user.getPosts)
    .get('/superadmin', superAdmin.allAdmin)

    .post('/admin', admin.adminChecker)
    .post('/superadmin', superAdmin.addAdmin)
    .post('/token', token.tokenchecker)
    .post('/admin/addcategory', admin.addCategory)
    .post('/admin/getcategories', admin.adminCategories)
    .post('/admin/addpost', admin.addPost)
    .post('/admin/getposts', admin.adminPosts)
    .post('/user/adduser', user.addUser)
    .post('/posts/filter', user.getPostsCategory)

    .put('/admin/categories', admin.updateCategory)
    .put('/admin/posts', admin.updatePost)

    .delete('/superadmin', superAdmin.deleteAdmin)
    .delete('/admin/category', admin.deleteCategory)
    .delete('/admin/post', admin.deletePost)


module.exports = router