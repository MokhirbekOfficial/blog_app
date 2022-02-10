const {getAdmin, addCategory, addPost, getPosts,getCategories,deletePost,deleteCategory,updateCategory,updatePost} = require('./model')
const secret_key = 'BLOGAPP'
const jwt = require('jsonwebtoken')

module.exports = {
    adminChecker: async(req, res) => {
        try {
            let {login, password} = req.body
            let Admin = await getAdmin(login,password)
            if(Admin){
                let admin_id = Admin.admin_id
                const token = jwt.sign({admin_id}, secret_key)
                let obj = {
                    token: token,
                    is_super: Admin.is_super
                }
                return res.status(200).send(obj)
            }
            res.status(400).send('Wrong login or password!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addCategory: async(req, res) => {
        try {
            let {token, category_name} = req.body
            const decoded = jwt.verify(token, secret_key)
            let category_owner = decoded.admin_id
            await addCategory(category_name, category_owner)
            res.status(201).send('New category is created!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addPost: async(req, res) => {
        try {
            let {token, post_title,post_content,post_img,post_category} = req.body
            const decoded = jwt.verify(token, secret_key)
            let post_owner = decoded.admin_id
            await addPost(post_title,post_content,post_img,post_owner,post_category)
            res.status(201).send('New post is created!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    adminCategories: async(req, res) => {
        try {
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            let category_owner = decoded.admin_id
            let adminCategories = await getCategories(category_owner)
            res.status(200).send(adminCategories)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    adminPosts: async(req, res) => {
        try {
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            let post_owner = decoded.admin_id
            let adminPosts = await getPosts(post_owner)
            res.status(200).send(adminPosts)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    deleteCategory: async(req, res) => {
        try {
            let {token,category_id} = req.body
            const decoded = jwt.verify(token, secret_key)
            let category_owner = decoded.admin_id
            await deleteCategory(category_id,category_owner)
            res.status(200).send('Category is successfully deleted')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    deletePost: async(req, res) => {
        try {
            let {token,post_id} = req.body
            const decoded = jwt.verify(token, secret_key)
            let post_owner = decoded.admin_id
            await deletePost(post_id,post_owner)
            res.status(200).send('Post is successfully deleted')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    updateCategory: async(req, res) => {
        try {
            let {token,category_id,category_name} = req.body
            const decoded = jwt.verify(token, secret_key)
            let category_owner = decoded.admin_id
            let updatedCategory = await updateCategory(category_id,category_owner,category_name)
            res.status(200).send(updatedCategory)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    updatePost: async(req, res) => {
        try {
            let {token,post_id,post_title,post_content,post_img,post_category} = req.body
            const decoded = jwt.verify(token, secret_key)
            let post_owner = decoded.admin_id
            let updatedPost = await updatePost(post_id,post_owner,post_title,post_content,post_img,post_category)
            res.status(200).send(updatedPost)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}