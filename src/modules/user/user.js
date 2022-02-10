const {addUser, getPosts, getPostsCategory} = require('./model')

module.exports = {
    getPosts: async(req, res) => {
        try {
            let allPosts = await getPosts()
            res.status(200).send(allPosts.reverse())
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    getPostsCategory: async(req, res) => {
        try {
            let {post_category} = req.body
            let postsWithCategory = await getPostsCategory(post_category)
            res.status(201).send(postsWithCategory)
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    },
    addUser: async(req, res) => {
        try {
            let {user_name,user_tel,user_category} = req.body
            await addUser(user_name,user_tel,user_category)
            res.status(201).send('New user is created!')
        } catch(e) {
            console.log(e.message)
            res.status(405).json(e.message)
        }
    }
}