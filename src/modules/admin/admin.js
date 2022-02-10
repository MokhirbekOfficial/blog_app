const {getAdmin, addCategory, addPost} = require('./model')
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
    }
}