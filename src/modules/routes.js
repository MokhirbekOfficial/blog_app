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
    .post('/admin/addpost', admin.addPost)
    .post('/user/adduser', user.addUser)
    .post('/posts/filter', user.getPostsCategory)

    .delete('/superadmin', superAdmin.deleteAdmin)


module.exports = router